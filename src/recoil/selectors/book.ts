import { selector } from 'recoil';
import { shelfAtom } from '../atoms/shelf';

export const booksSelector = selector({
  key: 'books',
  get: ({ get }) => {
    const shelf = get(shelfAtom);

    const finished = shelf.books.filter((b) => b.startedAt && b.finishedAt);
    const current = shelf.books.filter((b) => b.startedAt && !b.finishedAt);
    const unplanned = shelf.books.filter((b) => !b.startedAt && !b.finishedAt);

    return { finished, current, unplanned };
  },
});
