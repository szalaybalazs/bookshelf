import { FC } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { iBook } from '../types';

interface iBookProps {
  route: { params: { book: iBook } };
}

const Book: FC<iBookProps> = ({
  route: {
    params: { book },
  },
}) => {
  return (
    <SafeAreaView style={{ backgroundColor: book.colour, flex: 1 }}>
      <Image source={{ uri: book.cover }} style={{ height: 320, width: '100%' }} resizeMode='contain' />
      <Text>{book.title}</Text>
    </SafeAreaView>
  );
};

export default Book;
