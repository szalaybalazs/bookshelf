import { atom, atomFamily, selectorFamily } from 'recoil';
import { iShelf } from '../../types';
import { storageEffect } from '../effects';

const defaultShelf: iShelf = { books: [], goal: 25, start: new Date() };

export const shelfAtom = atom({
  key: 'shelf',
  default: defaultShelf,
  effects: [storageEffect('@shelf.2', defaultShelf)],
});

export const bookAtom = atomFamily({
  key: 'book',
  default: selectorFamily({
    key: 'book/Default',
    get:
      (param) =>
      ({ get }) => {
        const shelf = get(shelfAtom);
        return shelf.books.find((book) => book.id === param);
      },
  }),
});
