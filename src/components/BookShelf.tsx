import { FC, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { colours, fonts } from '../config';
import { navigation, styled } from '../core';
import { BOOK_DIMENSIONS } from '../core/constants';
import { shelfAtom } from '../recoil/atoms/shelf';
import { iBook } from '../types';
import Container from './Container';

type eType = 'FINISHED' | 'ACTIVE' | 'PLANNED' | 'EMPTY';
interface iShelfBook {
  book?: iBook;
  index: number;
  type: eType;
}

interface iShelfProps {}

const BookShelf: FC<iShelfProps> = () => {
  const shelf = useRecoilValue(shelfAtom);

  const books: iShelfBook[] = useMemo(() => {
    const finishedBooks = shelf.books.filter((b) => b.startedAt && b.finishedAt);
    const currentBooks = shelf.books.filter((b) => b.startedAt && !b.finishedAt);
    const unplannedBooks = shelf.books.filter((b) => !b.startedAt);

    const rest = Math.max(0, shelf.goal - shelf.books.length);

    const books: iShelfBook[] = [
      ...finishedBooks.map((book): iShelfBook => ({ book, type: 'FINISHED', index: NaN })),
      ...currentBooks.map((book): iShelfBook => ({ book, type: 'ACTIVE', index: NaN })),
      ...unplannedBooks.map((book): iShelfBook => ({ book, type: 'PLANNED', index: NaN })),
      ...[...new Array(rest)].map((): iShelfBook => ({ type: 'EMPTY', index: NaN })),
    ];

    return books.map((book, index) => ({ ...book, index }));
  }, [shelf.books, shelf.goal]);
  return (
    <Container padding>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', paddingHorizontal: 4 }}>
        {books.map((book, index) => (
          <Book key={`book-${index}`} {...book} />
        ))}
      </View>
    </Container>
  );
};

const getBackground = (type: eType, colour?: string) => {
  if (type === 'FINISHED') return colour;
  if (type === 'ACTIVE') return colour;
  if (type === 'PLANNED') return colours.light.foreground;
  return colours.light.background;
};
const getBorder = (type: eType, colour?: string) => {
  if (type === 'FINISHED') return colour;
  if (type === 'ACTIVE') return colour;
  if (type === 'PLANNED') return colours.light.foreground;
  return colours.light.foreground;
};

const BookWrapper = styled.View<{ width: number; height: number; type: eType; colour?: string }>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background-color: ${(p) => getBackground(p.type, p.colour)};
  border: 1px solid ${(p) => getBorder(p.type, p.colour)};
  /* backgroundColor: book?.colour ?? '#aaa', */
  /* marginHorizontal: 0.5, */
  /* marginBottom: 24, */
  margin: 0 0.5px 24px 0.5px;
  border-radius: 2px;
`;

interface iBookProps extends iShelfBook {}
const Book: FC<iBookProps> = ({ index, book, type }) => {
  const { width, height } = useMemo(() => {
    const { width, height } = BOOK_DIMENSIONS[(index || 0) % BOOK_DIMENSIONS.length];

    return {
      width: width * 1.3,
      height: height * 1.23,
    };
  }, [index]);

  const label = useMemo(() => {
    if (!book?.title || ['PLANNED', 'EMPTY'].includes(type)) {
      return (
        <Text
          adjustsFontSizeToFit
          allowFontScaling
          minimumFontScale={0.1}
          style={{
            width,
            position: 'absolute',
            top: '50%',
            left: 0,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '500',
            transform: [{ translateY: -7 }],
            fontFamily: fonts.code.semibold,
            color: colours.dark.color,
            opacity: 0.6,
          }}
        >
          #{index + 1}
        </Text>
      );
    }

    return (
      <View
        style={{
          width: height,
          height: width,
          position: 'absolute',
          // top: '50%',
          // left: 0,
          transform: [{ translateY: -width / 2 }, { translateX: -height / 2 + width / 2 }, { rotate: '90deg' }, { translateX: height / 2 }],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
          style={{
            width: height,
            overflow: 'hidden',
            // top: '50%',
            // left: 0,
            color: 'white',
            textAlign: 'center',
            padding: 1,
            fontSize: 12,
            paddingHorizontal: 8,
            fontFamily: fonts.primary.medium,
          }}
        >
          {book.title}
        </Text>
      </View>
    );
  }, [type, book?.title, index]);

  const _handleDetails = () => {
    if (book) navigation.navigate('Book', { book });
  };

  return (
    <Pressable onPress={_handleDetails}>
      <BookWrapper
        width={width}
        height={height}
        type={type}
        colour={book?.colour}
        // style={{
        //   width,
        //   height,
        //   backgroundColor: book?.colour ?? '#aaa',
        //   marginHorizontal: 0.5,
        //   marginBottom: 24,
        //   borderRadius: 2,
        // }}
      >
        {label}
      </BookWrapper>
    </Pressable>
  );
};

export default BookShelf;
