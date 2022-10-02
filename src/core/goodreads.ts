import parse from 'node-html-parser';
import { iBook } from '../types';
import { getColor } from './colors';

export const getBooksFromGoodreads = async (query: string): Promise<iBook[]> => {
  try {
    const res = await fetch(`https://www.goodreads.com/search?utf8=%E2%9C%93&q=${query}&search_type=books`, {});
    const html = await res.text();
    const dom = parse(html);
    const list = [...dom.querySelectorAll('tr[itemscope]')];

    const books = Promise.all(
      list.map(async (tr): Promise<iBook> => {
        const url = tr.querySelector('a[itemprop=url]')?.getAttribute('href')?.split('?')?.[0] || '';
        const title = tr.querySelector('a[itemprop=url]')?.innerText?.trim() || '';
        const authors = [...(tr.querySelector('span[itemprop=author]')?.querySelectorAll('a') || [])].map((a) => a.innerText);
        const cover = tr.querySelector('img')?.getAttribute('src')?.replace('._SY75_', '');
        const colour = await getColor(cover);
        const id = url.split('/')[2] || '';

        return { title, authors, cover, source: 'GOODREADS', colour, id, url };
      }),
    );
    return books;
  } catch (error: any) {
    console.log('ERROR - GR - ', error.message);
    return [];
  }
};

export const getBookFromGoodreadByUrl = async (url: string): Promise<Partial<iBook>> => {
  try {
    const res = await fetch(`https://www.goodreads.com${url}`, {});
    const html = await res.text();
    const dom = parse(html);
    const rating = Number(dom.querySelector('.RatingStatistics__rating')?.innerText);
    const descriptionHTML = dom.querySelector('.DetailsLayoutRightParagraph__widthConstrained')?.innerHTML;
    const pages = Number(dom.querySelector('.pagesFormat')?.innerText?.split(' ')[0]);

    const description = descriptionHTML?.replace(/(<br>)+/g, '\n\n').replace(/<.+?>/g, '');

    return { rating, pages, description };
  } catch (error: any) {
    console.log('ERROR - GR - ', error.message);
    return {};
  }
};
