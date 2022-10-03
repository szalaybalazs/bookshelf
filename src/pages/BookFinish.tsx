import { Container } from '@/components';
import BookModalHeader from '@/components/BookModalHeader';
import BookModalTitle from '@/components/BookModalTitle';
import Skeleton from '@/components/Skeleton';
import Slide from '@/components/Slide';
import { navigation } from '@/core';
import { useModal } from '@/hooks/useModal';
import FinishSuccess from '@/modals/FinishSuccess';
import { shelfAtom } from '@/recoil/atoms/shelf';
import { iBook } from '@/types';
import { FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilCallback } from 'recoil';

interface iBookFinishProps {
  route: { params: { book: iBook } };
}

const BookFinish: FC<iBookFinishProps> = ({
  route: {
    params: { book },
  },
}) => {
  const modal = useModal();
  const _handleFinish = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const shelf = await snapshot.getPromise(shelfAtom);
        const books = shelf.books;
        const bookIndex = books.findIndex((b) => b.startedAt && !b.finishedAt);

        if (bookIndex < 0) throw Error();
        const _books = [...shelf.books];
        _books[bookIndex] = { ..._books[bookIndex], finishedAt: new Date() };

        set(shelfAtom, { ...shelf, books: _books });
        modal.presentModal(<FinishSuccess />, { timeout: 2000 });
        navigation.pop();
      },
    [],
  );
  return (
    <Skeleton padding={false} safearea={false}>
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <BookModalHeader {...book} />
        <Container padding>
          <BookModalTitle {...book} />
          <View style={{ flex: 1 }}></View>
          <Slide colour={book?.colour} label='Finish book' releaseLabel='Save' onSuccess={_handleFinish} />
        </Container>
      </SafeAreaView>
    </Skeleton>
  );
};

export default BookFinish;
