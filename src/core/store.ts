import { iBook } from '../types';
import { getColor } from './colors';

const cache: { [key: string]: iBook[] } = {};

export const queryBooks = async (query: string): Promise<iBook[]> => {
  const _query = encodeURIComponent(query.trim());
  if (_query in cache) return cache[_query];

  try {
    const fields =
      'kind,items(id,kind,volumeInfo(title,subtitle,authors,imageLinks/thumbnail,description,pageCount,averageRating,language))';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${_query}&key=AIzaSyANFYG54Z_8FaOJ-fSx0VRxNFOT35_ycf8&fields=${fields}`;
    const res = await fetch(url);
    const data = await res.json();

    const items = data.items;

    const books = await Promise.all(
      items.map(async (item: any): Promise<iBook> => {
        const cover = item?.volumeInfo?.imageLinks?.thumbnail;
        const colour = await getColor(cover);
        const book: iBook = {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          description: item.volumeInfo.description,
          authors: item.volumeInfo.authors,

          pages: item.volumeInfo.pageCount,

          averageRating: item.volumeInfo.averageRating,

          colour,
          cover: cover?.replace(/&zoom=\d/, ''),
        };

        return book;
      }),
    );

    cache[_query] = books;
    return books;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
};
