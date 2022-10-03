import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ModalProvider from './Modal';

const Providers: FC = ({ children }: any) => {
  return (
    <SafeAreaProvider>
      <ModalProvider>{children}</ModalProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default Providers;
