import { Action, Button, Container, Header, Row, Separator } from '@/components';
import Skeleton from '@/components/Skeleton';
import { colours, fonts } from '@/config';
import { useBook } from '@/hooks/useBook';
import { useModal } from '@/hooks/useModal';
import CreationSuccess from '@/modals/CreationSuccess';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { navigation, styled } from '../core';
import { shelfAtom } from '../recoil/atoms/shelf';
import { iBook } from '../types';
interface iBookProps {
  route: { params: { book: iBook } };
}

const Title = styled.Text`
  font-size: 32px;
  font-family: ${fonts.primary.bold};
  text-align: center;
  color: ${colours.dark.color};
`;

const Author = styled.Text`
  font-size: 14px;
  font-family: ${fonts.primary.bold};
  opacity: 0.6;
  color: ${colours.dark.color};
  text-align: center;
`;

const Desciption = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${colours.dark.color};
  font-family: ${fonts.primary.regular};
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const CoverWrapper = styled.View``;
const Cover = styled.Image`
  height: 240px;
  width: 100%;
`;

const Book: FC<iBookProps> = ({
  route: {
    params: { book: initial },
  },
}) => {
  const modal = useModal();
  const shelf = useRecoilValue(shelfAtom);
  const { book, loading, error } = useBook(initial);

  const _handleAdd = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const shelf = await snapshot.getPromise(shelfAtom);
        const _shelf = { ...shelf, books: [...shelf.books, book] };

        navigation.pop();
        modal.presentModal(<CreationSuccess />, { timeout: 5000, poppable: true });
        set(shelfAtom, _shelf);
      },
    [book],
  );

  const isAddedAlready = useMemo(() => {
    return !!shelf.books.find((b) => b.id === book.id);
  }, [book.id, shelf.books]);

  return (
    <Skeleton padding={false} safearea={false}>
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <Scroll>
          <CoverWrapper>
            <LinearGradient style={{ flex: 1 }} colors={[book.colour || colours.dark.background, colours.dark.background]}>
              <Row padding={24}>
                <Action large icon='chevron-down' onPress={navigation.pop} />
                <Action large icon='share' onPress={() => alert('Sharing coming soon')} />
              </Row>

              <Separator scale={4} />
              <Cover source={{ uri: book.cover }} resizeMode='contain' />
              <Separator scale={8} />
            </LinearGradient>
          </CoverWrapper>
          <Container padding>
            <Title adjustsFontSizeToFit numberOfLines={2}>
              {book.title}
            </Title>
            <Separator scale={2} />
            <Author>{book.authors.join(', ')}</Author>
            <Separator scale={6} />
            {!book.description && loading ? (
              <ActivityIndicator animating color={colours.dark.color} />
            ) : (
              <Desciption>{book?.description || error}</Desciption>
            )}
            <Separator scale={4} />
          </Container>
        </Scroll>
        <View style={{ marginHorizontal: 24 }}>
          <Button onPress={_handleAdd} disabled={isAddedAlready} colour={book.colour}>
            {isAddedAlready ? 'Already on shelf' : 'Add to shelf'}
          </Button>
        </View>
      </SafeAreaView>
    </Skeleton>
  );
};

export default Book;
