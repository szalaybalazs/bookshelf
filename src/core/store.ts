import { iBook } from '../types';
import { getColor } from './colors';

const cache: { [key: string]: iBook[] } = {};

export const queryBooks = async (query: string): Promise<iBook[]> => {
  const _query = encodeURIComponent(query.trim());
  if (_query in cache) return cache[_query];

  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${_query}&key=AIzaSyANFYG54Z_8FaOJ-fSx0VRxNFOT35_ycf8`;
    const res = await fetch(url);
    const data = await res.json();

    const items = data.items;

    const books: iBook[] = [];

    for (const item of items) {
      const cover = item?.volumeInfo?.imageLinks?.thumbnail?.replace(/&zoom=\d/, '');
      const colour = await getColor(cover);
      console.log(cover, colour);
      const book: iBook = {
        id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        description: item.volumeInfo.description,
        authors: item.volumeInfo.authors,

        pages: item.volumeInfo.pageCount,

        averageRating: item.volumeInfo.averageRating,

        colour,
        cover,
      };

      books.push(book);
    }

    cache[_query] = books;
    return books;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
};
