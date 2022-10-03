import { atom } from 'recoil';
import { storageEffect } from '../effects';

const defaultSearch = 'Alice in wonderland';

export const searchAtom = atom({
  key: 'search',
  default: defaultSearch,
  effects: [storageEffect('@search', defaultSearch)],
});
