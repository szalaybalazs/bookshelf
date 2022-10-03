import { Container, Header, Separator } from '@/components';
import Skeleton from '@/components/Skeleton';
import { FC, useMemo } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { colours } from '../config';
import { styled } from '../core';
import { BOOK_DIMENSIONS } from '../core/constants';
import { shelfAtom } from '../recoil/atoms/shelf';
import { iBook } from '../types';

type eType = 'FINISHED' | 'ACTIVE' | 'PLANNED' | 'EMPTY';
interface iShelfBook {
  book?: iBook;
  index?: number;
  type: eType;
}

interface iShelfProps {}

const Shelf: FC<iShelfProps> = () => {
  const shelf = useRecoilValue(shelfAtom);

  const books: iShelfBook[] = useMemo(() => {
    const finishedBooks = shelf.books.filter((b) => b.startedAt && b.finishedAt);
    const currentBooks = shelf.books.filter((b) => b.startedAt && !b.finishedAt);
    const unplannedBooks = shelf.books.filter((b) => !b.startedAt);

    const rest = Math.max(0, shelf.goal - shelf.books.length);

    const books: iShelfBook[] = [
      ...finishedBooks.map((book): iShelfBook => ({ book, type: 'FINISHED' })),
      ...currentBooks.map((book): iShelfBook => ({ book, type: 'ACTIVE' })),
      ...unplannedBooks.map((book): iShelfBook => ({ book, type: 'PLANNED' })),
      ...[...new Array(rest)].map((): iShelfBook => ({ type: 'EMPTY' })),
    ];

    return books.map((book, index) => ({ ...book, index }));
  }, [shelf.books, shelf.goal]);
  return (
    <Skeleton safearea={false} type='SLIM' title='Shelf' subtitle='Manage your books and set your yearly goal' action={{ icon: 'user' }}>
      <Separator />
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', paddingHorizontal: 4 }}>
          {books.map((book, index) => (
            <Book key={`book-${index}`} {...book} />
          ))}
        </View>
      </ScrollView>
    </Skeleton>
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
  return (
    <BookWrapper
      width={width}
      height={height}
      type={type}
      // style={{
      //   width,
      //   height,
      //   backgroundColor: book?.colour ?? '#aaa',
      //   marginHorizontal: 0.5,
      //   marginBottom: 24,
      //   borderRadius: 2,
      // }}
    >
      {!book?.title ? (
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
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            transform: [{ translateY: -7 }],
          }}
        >
          {index + 1}
        </Text>
      ) : (
        <View
          style={{
            width: height,
            height: width,
            position: 'absolute',
            // top: '50%',
            // left: 0,
            transform: [
              { translateY: -width / 2 },
              { translateX: -height / 2 + width / 2 },
              { rotate: '90deg' },
              { translateX: height / 2 },
            ],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            style={{
              width: height,
              overflow: 'hidden',
              // top: '50%',
              // left: 0,
              color: 'white',
              textAlign: 'center',
              padding: 1,
              paddingHorizontal: 8,
            }}
          >
            {book.title}
          </Text>
        </View>
      )}
    </BookWrapper>
  );
};

export default Shelf;
