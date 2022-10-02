import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Search from './src/pages/Search';

export default function App() {
  return (
    <>
      <Search />
      <StatusBar style='auto' />
    </>
  );
}
