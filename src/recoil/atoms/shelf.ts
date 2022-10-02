import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, selector, AtomEffect } from 'recoil';
import { iBook, iShelf } from '../../types';

const key = '@shelf';

const storageEffect: AtomEffect<iShelf> = ({ setSelf, onSet }) => {
  onSet((shelf, _, isReset) => {
    if (isReset) AsyncStorage.removeItem(key);
    else AsyncStorage.setItem(key, JSON.stringify(shelf));
  });

  AsyncStorage.getItem(key).then((value) => {
    const shelf = JSON.parse(value || '{"books": []}');
    setSelf(shelf);
  });
};

export const shelfAtom = atom({
  key: 'shelf',
  default: { books: [] },
  effects: [storageEffect],
});
