import { FC, useRef, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { queryBooks, navigation } from '../core';
import { iBook } from '../types';

interface iSearchProps {}

const Search: FC<iSearchProps> = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<iBook[]>([]);
  const timeout = useRef<any>(null);

  const _handleBooks = async (query: string) => {
    if (!query) return setBooks([]);
    const books = await queryBooks(query);

    setBooks(books);
  };

  const _handleQuery = (val: string) => {
    setQuery(val);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => _handleBooks(val), 500);
  };
  return (
    <SafeAreaView>
      <TextInput value={query} placeholder='Search...' onChangeText={_handleQuery} />
      <ScrollView>
        {books.map((book) => (
          <TouchableOpacity onPress={() => navigation.navigate('Book', { book })}>
            <View key={book.id} style={{ backgroundColor: book.colour }}>
              <Image source={{ uri: book.cover }} style={{ width: 120, height: 120 }} />
              <Text>
                {book.title} ({book.authors?.join(', ')})
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
