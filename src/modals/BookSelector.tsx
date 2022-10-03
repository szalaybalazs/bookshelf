import { Separator } from '@/components';
import Book from '@/components/Book';
import { useModal } from '@/hooks/useModal';
import { shelfAtom } from '@/recoil/atoms/shelf';
import { booksSelector } from '@/recoil/selectors/book';
import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRecoilCallback, useRecoilValue } from 'recoil';

interface iBookSelectorProps {}
const BookSelector: FC<iBookSelectorProps> = ({}) => {
  const modal = useModal();
  const { unplanned: books } = useRecoilValue(booksSelector);

  const _handleSelect = useRecoilCallback(
    ({ snapshot, set }) =>
      async (id: string) => {
        try {
          const shelf = await snapshot.getPromise(shelfAtom);

          const bookIndex = shelf.books.findIndex((b) => b.id === id);
          if (bookIndex < 0) throw Error('Book not found');

          const _books = [...shelf.books];
          _books[bookIndex] = { ..._books[bookIndex], startedAt: new Date() };

          console.log(_books);

          set(shelfAtom, { ...shelf, books: _books });
        } catch (error) {
          alert(error);
        } finally {
          modal.dismissModal();
        }
      },
    [books],
  );
  return (
    <>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
        {books.map((book) => (
          <Book onPress={_handleSelect} author={book.authors.join(', ').replace(/\s+/, ' ')} {...book} key={book.id} />
        ))}
        {/* {accounts.map((account) => (
        <Account {...account} key={account.address} onPress={onChange} />
      ))} */}

        <Separator scale={2} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: { maxHeight: 420, marginHorizontal: -24 },
  content: { paddingHorizontal: 24 },
});

export default BookSelector;
