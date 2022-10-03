import { Input, Separator } from '@/components';
import Skeleton from '@/components/Skeleton';
import { colours, fonts } from '@/config';
import { useModal } from '@/hooks/useModal';
import { ComingSoonModal } from '@/modals';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { navigation, queryBooks } from '../core';
import { searchAtom } from '../recoil/atoms/search';
import { iBook } from '../types';

interface iSearchProps {}

const Search: FC<iSearchProps> = () => {
  const [query, setQuery] = useRecoilState(searchAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<iBook[]>([]);
  const timeout = useRef<any>(null);

  const _handleBooks = async (query: string) => {
    if (!query) return;
    setIsLoading(true);
    const books = await queryBooks(query);
    setIsLoading(false);

    setBooks(books);
  };

  const _handleQuery = (val: string) => {
    setQuery(val);
  };

  useEffect(() => {
    timeout.current = setTimeout(() => _handleBooks(query), 500);

    return () => clearTimeout(timeout.current);
  }, [query]);

  const _handleRender = useCallback(
    (item: iBook, index: number, books: iBook[]) => <Book book={item} key={item.id} isLast={index === books.length - 1} />,
    [],
  );

  const modal = useModal();
  const _handleManual = () => modal.presentModal(<ComingSoonModal />, { timeout: 3000 });

  return (
    <Skeleton
      safearea={false}
      title='Search'
      action={{
        icon: 'plus',
        onPress: _handleManual,
      }}
      type='SLIM'
    >
      <Separator />
      <Input value={query} placeholder='Search...' onChange={_handleQuery} />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator animating color={colours.dark.color} />
        </View>
      ) : (
        <ScrollView>
          <Separator />
          {books.map(_handleRender)}
        </ScrollView>
      )}
      {/* <FlatList data={books} renderItem={_handleRender} /> */}
    </Skeleton>
  );
};

interface iBookProps {
  book: iBook;
  isLast: boolean;
}
const Book: FC<iBookProps> = ({ book, isLast }) => {
  const _handleOpen = useCallback(() => navigation.navigate('Book', { book }), [book]);
  return (
    <>
      <TouchableOpacity onPress={_handleOpen}>
        <View style={[bookStyles.wrapper]}>
          <View style={bookStyles.cover}>
            <Image source={{ uri: book.cover }} style={bookStyles.image} resizeMode='contain' />
          </View>
          <Separator scale={2} horizontal />
          <View style={bookStyles.data}>
            <Text style={bookStyles.title} numberOfLines={2}>
              {book.title}
            </Text>
            <Separator scale={1} />
            <Text numberOfLines={1} adjustsFontSizeToFit style={bookStyles.author}>
              {book.authors.join(', ').replace(/\s+/, ' ')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Separator />
      {!isLast && (
        <>
          <View style={bookStyles.border} />
          <Separator />
        </>
      )}
    </>
  );
};

const bookStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cover: {},
  image: { width: 70, height: 100 },
  data: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
  },
  author: {
    opacity: 0.6,
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colours.dark.color,
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: colours.dark.foreground,
  },
});

export default Search;
