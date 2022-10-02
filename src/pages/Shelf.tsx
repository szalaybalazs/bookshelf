import { FC, useMemo } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { iBook } from '../types';

interface iShelfProps {}

const Shelf: FC<iShelfProps> = () => {
  return (
    <SafeAreaView>
      <Text>25</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', paddingHorizontal: 4 }}>
          {[{ id: '', title: 'Mesterségem a halál', colour: 'pink' }, ...new Array(50)].map((book: iBook | undefined, index) => (
            <Book index={index} key={`book-${index}`} book={book} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const dimensions: { width: number; height: number }[] = [
  {
    width: 36,
    height: 120,
  },
  {
    width: 32,
    height: 110,
  },
  {
    width: 24,
    height: 116,
  },
  {
    width: 32,
    height: 80,
  },
  {
    width: 28,
    height: 96,
  },
  {
    width: 32,
    height: 90,
  },
  {
    width: 24,
    height: 118,
  },
  {
    width: 32,
    height: 100,
  },
];
const heights = [120, 100, 125, 96, 180];

interface iBookProps {
  index: number;
  book: iBook | undefined;
}
const Book: FC<iBookProps> = ({ index, book }) => {
  const { width, height } = useMemo(() => {
    return dimensions[index % dimensions.length];
  }, [index]);
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: book?.colour ?? '#aaa',
        marginHorizontal: 0.5,
        marginBottom: 24,
        borderRadius: 2,
      }}
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
            adjustsFontSizeToFit
            style={{
              width: height,
              overflow: 'hidden',
              // top: '50%',
              // left: 0,
              color: 'white',
              textAlign: 'center',
              padding: 1,
            }}
          >
            {book.title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Shelf;
