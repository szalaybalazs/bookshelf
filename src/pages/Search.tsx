import { FC, useCallback, useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigation, queryBooks, styled } from '../core';
import { iBook } from '../types';

interface iSearchProps {}

const Wrapper = styled.View`
  flex: 1;
`;
const SearchBar = styled.TextInput`
  margin: 12px 16px;
  padding: 8px 16px;
  background-color: #ddd;
  border-radius: 6px;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;

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

  const _handleRender = useCallback(({ item }: { item: iBook }) => <Book book={item} />, []);

  return (
    <Wrapper>
      <Safe>
        <SearchBar value={query} placeholder='Search...' onChangeText={_handleQuery} />
        <Wrapper>
          <FlatList data={books} renderItem={_handleRender} />
        </Wrapper>
      </Safe>
    </Wrapper>
  );
};

interface iBookProps {
  book: iBook;
}
const Book: FC<iBookProps> = ({ book }) => {
  const _handleOpen = useCallback(() => navigation.navigate('Book', { book }), [book]);
  return (
    <TouchableOpacity onPress={_handleOpen}>
      <View style={[bookStyles.wrapper]}>
        <View style={bookStyles.cover}>
          <Image source={{ uri: book.cover }} style={{ width: 80, height: 100 }} resizeMode='contain' />
        </View>
        <View style={bookStyles.data}>
          <Text style={bookStyles.title}>{book.title}</Text>
          <Text style={bookStyles.author}>{book.authors}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const bookStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomColor: '#ccc',
  },
  cover: {
    padding: 12,
  },
  data: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  author: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
});

export default Search;
