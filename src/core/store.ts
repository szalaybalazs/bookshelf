import { iBook } from '../types';
import { getColor } from './colors';
import { getBooksFromGoodreads } from './goodreads';

const cache: { [key: string]: iBook[] } = {};

const getFromIsbn = async (query: string): Promise<iBook[]> => {
  try {
    const url = `https://api2.isbndb.com/books/${query}?page=1&pageSize=50`;
    const res = await fetch(url, { headers: { Authorization: '48508_8fdaa238027435ae26754317ca91a136' } });
    const data = await res.json();
    const items = data.books || [];
    return Promise.all(
      items.map(async (item: any): Promise<iBook> => {
        const cover = item?.image;
        const colour = await getColor(cover);
        const book: iBook = {
          id: `isbn_${item.isbn}`,
          title: item.title,
          description: item.synopsis,
          authors: item.authors,

          pages: item.pages,

          colour,
          cover,

          source: 'ISBNDB',
        };

        return book;
      }),
    );
  } catch (error: any) {
    console.log('ERROR - ISBN - ', error.message);
    return [];
  }
};

// const getFromGoogle = async (query: string): Promise<iBook[]> => {
//   try {
//     const fields =
//       'kind,items(id,kind,volumeInfo(title,subtitle,ahttps://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyANFYG54Z_8FaOJ-fSx0VRxNFOT35_ycf8uthors,imageLinks/thumbnail,description,pageCount,averageRating,language))';
//     const url = `&fields=${fields}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     const items = data.items;

//     const books = await Promise.all(
//       items.map(async (item: any): Promise<iBook> => {
//         const cover = item?.volumeInfo?.imageLinks?.thumbnail;
//         const colour = await getColor(cover);
//         console.log(item);
//         const book: iBook = {
//           id: `Google_${item.id}`,
//           title: item.volumeInfo.title,
//           subtitle: item.volumeInfo.subtitle,
//           description: item.volumeInfo.description,
//           authors: item.volumeInfo.authors,

//           pages: item.volumeInfo.pageCount,

//           averageRating: item.volumeInfo.averageRating,

//           source: 'GOOGLE',
//           colour,
//           cover: cover?.replace(/&zoom=\d/, ''),
//         };

//         return book;
//       }),
//     );

//     return books;
//   } catch (error: any) {
//     console.log('ERROR - GOOGLE - ', error.message);
//     return [];
//   }
// };

export const queryBooks = async (query: string): Promise<iBook[]> => {
  const _query = encodeURIComponent(
    query
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase(),
  );
  if (_query in cache) return cache[_query];

  try {
    const res = await Promise.all([
      getBooksFromGoodreads(_query),
      // getFromIsbn(_query),
      // , getFromGoogle(_query)
    ]);

    const books = res.flat().filter((a) => !!a.cover);
    cache[_query] = books;
    return books;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
};
