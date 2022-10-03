import { selector } from 'recoil';
import { shelfAtom } from '../atoms/shelf';

export const activeBookSelector = selector({
  key: 'activeBook',
  get: ({ get }) => {
    const shelf = get(shelfAtom);

    const active = shelf.books.find((b) => b.startedAt && !b.finishedAt);

    return active;
  },
});
