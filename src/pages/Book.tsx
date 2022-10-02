import { LinearGradient } from 'expo-linear-gradient';
import { FC, useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from '../core';
import { iBook } from '../types';
import { shelfAtom } from '../recoil/atoms/shelf';
import { getBookFromGoodreadByUrl } from '../core/goodreads';
interface iBookProps {
  route: { params: { book: iBook } };
}

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;
const Container = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  margin-bottom: 64px;
`;
const Title = styled.Text`
  font-size: 32px;
  font-weight: 900;
  text-align: center;
`;
const Subtitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  margin-top: 4px;
  text-align: center;
  opacity: 0.8;
`;
const Author = styled.Text`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 8px;
  text-align: center;
`;

const Rating = styled.Text`
  margin-top: 12px;
  font-weight: 800;
`;
const Desciption = styled.Text`
  width: 100%;
  margin-top: 16px;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const CoverWrapper = styled.View``;
const Cover = styled.Image`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 240px;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  background: black;
  color: white;
  margin-left: 16px;
  margin-right: 16px;
  padding: 12px 16px;
  border-radius: 6px;
`;
const ButtonLabel = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;
const Book: FC<iBookProps> = ({
  route: {
    params: { book },
  },
}) => {
  const [state, setState] = useState();
  const _handleAdd = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const shelf = await snapshot.getPromise(shelfAtom);
        console.log(shelf);
        const _shelf = { ...shelf, books: [...shelf.books, book] };

        set(shelfAtom, _shelf);
      },
    [book],
  );
  useEffect(() => {
    if (book.url) getBookFromGoodreadByUrl(book.url).then(setState);
  }, [book.url]);

  console.log(state);
  return (
    <Wrapper>
      <Scroll bounces={false}>
        <SafeAreaView edges={['bottom']}>
          <CoverWrapper>
            <LinearGradient style={{ flex: 1 }} colors={[book.colour || 'white', 'white']}>
              <Cover source={{ uri: book.cover }} resizeMode='contain' />
            </LinearGradient>
          </CoverWrapper>
          <Container>
            <Title adjustsFontSizeToFit numberOfLines={3}>
              {book.title}
            </Title>
            {book.subtitle && <Subtitle>{book.subtitle}</Subtitle>}
            <Author>{book.authors.join(', ')}</Author>
            {book.averageRating && <Rating>{book.averageRating} / 5</Rating>}
            <Desciption>{state?.description || book.description}</Desciption>
          </Container>
        </SafeAreaView>
      </Scroll>
      <SafeAreaView edges={['bottom']} style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button onPress={_handleAdd}>
          <ButtonLabel>Add to shelf</ButtonLabel>
        </Button>
      </SafeAreaView>
    </Wrapper>
  );
};

export default Book;
