import parse from 'node-html-parser';
import { iBook } from '../types';
import { getColor } from './colors';

export const getBooksFromGoodreads = async (query: string): Promise<iBook[]> => {
  try {
    const res = await fetch(`https://www.goodreads.com/search?utf8=%E2%9C%93&q=${query}&search_type=books`, { credentials: 'omit' });
    const html = await res.text();
    const dom = parse(html);
    const list = [...dom.querySelectorAll('tr[itemscope]')];

    const books = Promise.all(
      list.map(async (tr): Promise<iBook> => {
        const url = tr.querySelector('a[itemprop=url]')?.getAttribute('href')?.split('?')?.[0] || '';
        const title = tr.querySelector('a[itemprop=url]')?.innerText?.trim() || '';
        const authors = [...(tr.querySelector('span[itemprop=author]')?.querySelectorAll('a') || [])].map((a) => a.innerText);
        const cover = tr
          .querySelector('img')
          ?.getAttribute('src')
          ?.replace(/\._S.+_/, '');
        const colour = await getColor(cover);
        const id = url.split('/')[3] || '';

        return { title, authors, cover, source: 'GOODREADS', colour, id, url };
      }),
    );
    return books;
  } catch (error: any) {
    console.log('ERROR - GR - ', error.message);
    return [];
  }
};

export const getBookFromGoodreadByUrl = async (url: string, lvl: number = 0): Promise<Partial<iBook>> => {
  if (lvl > 5) return {};
  try {
    const res = await fetch(`https://www.goodreads.com${url}`, { headers: { 'Accept-Language': 'en-US' }, credentials: 'omit' });
    const html = await res.text();
    const dom = parse(html);

    // console.log(dom.querySelector(`[href="${url}"]`)?.innerText, 'text');
    const main = dom.querySelector('main')?.innerHTML;
    if (!main) {
      console.log('Retriying in 2.5s');
      return new Promise((res) => {
        setTimeout(async () => {
          const data = await getBookFromGoodreadByUrl(url, lvl + 1);
          return res(data);
        }, 2500);
      });
    }
    const rating = Number(dom.querySelector('.RatingStatistics__rating')?.innerText);
    const descriptionHTML = [...(dom.querySelectorAll('[data-testid="description"] span') || [])].sort(
      (a, b) => b.innerText.length - a.innerText.length,
    )[0]?.innerHTML;
    const pages = Number(dom.querySelector('[data-testid="pagesFormat"]')?.innerText?.split(' ')[0]);

    const description = descriptionHTML
      ?.replace(/(<br>)+/g, '\n\n')
      .replace(/<.+?>/g, '')
      .replace('...more', '');

    return { rating, pages, description };
  } catch (error: any) {
    console.error('ERROR - GR - ', error.message);
    return {};
  }
};
