import { AtomEffect } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageEffect = <T>(key: string, defaultValue: T): AtomEffect<T> => {
  return ({ setSelf, onSet }) => {
    onSet((shelf, _, isReset) => {
      if (isReset) AsyncStorage.removeItem(key);
      else AsyncStorage.setItem(key, JSON.stringify(shelf));
    });

    AsyncStorage.getItem(key).then((value) => {
      const shelf = value ? JSON.parse(value) : defaultValue;
      setSelf(shelf);
    });
  };
};
