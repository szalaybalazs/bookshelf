import { selector } from 'recoil';
import { shelfAtom } from '../atoms/shelf';

export const booksSelector = selector({
  key: 'books',
  get: ({ get }) => {
    const shelf = get(shelfAtom);

    return shelf.books;
  },
});
