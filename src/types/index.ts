import { eIcon } from '@/components/icon';

export { iBook, iShelf } from './book';

export interface iAction {
  icon: eIcon;
  color?: string;
  onPress: () => void;
}

export interface iScreenProps<T> {
  route: {
    params: T;
  };
}

export type eWalletImportType = 'RECOVERY_PHRASE' | 'PRIVATE_KEY';

export interface iAccount {
  name: string;
  username: string;
  address: string;
  selected?: boolean;
  banner?: string;
}

export interface iContact {
  name: string;
  address: string;
  avatar: string;
  username: string;
}
