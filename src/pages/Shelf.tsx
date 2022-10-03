import { Button, HomeHeader, Separator } from '@/components';
import BookShelf from '@/components/BookShelf';
import { colours, fonts } from '@/config';
import { useModal } from '@/hooks/useModal';
import { BookSelectorModal } from '@/modals';
import { activeBookSelector } from '@/recoil/selectors/active';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

interface iShelfProps {}

const Shelf: FC<iShelfProps> = () => {
  const active = useRecoilValue(activeBookSelector);
  const modal = useModal();
  const _handleSelect = () => modal.presentModal(<BookSelectorModal />);
  return (
    <>
      <HomeHeader />
      <LinearGradient colors={[active?.colour || colours.dark.background, colours.dark.background]}>
        <SafeAreaView edges={['top']}>
          <View style={styles.bookWrapper}>
            <View style={styles.activeWrapper}>
              {!active ? (
                <>
                  <Text style={styles.emptyTitle}>You are not reading anything</Text>
                  <Button onPress={_handleSelect} type='link'>
                    Start a book
                  </Button>
                </>
              ) : (
                <>
                  {/* todo: move to actual header */}
                  <Text style={styles.title}>Currently reading</Text>
                  <Separator />
                  <Image resizeMode='contain' source={{ uri: active.cover }} style={styles.bookCover} />
                  <Separator />
                  <Text style={styles.bookTitle}>{active.title}</Text>
                  <Separator scale={1} />
                  <Text style={styles.author}>By {active.authors.join(', ').replace(/\s+/, ' ')}</Text>
                  <Separator />
                </>
              )}
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <BookShelf />
    </>
  );
};

const styles = StyleSheet.create({
  bookWrapper: {
    padding: 24,
    paddingTop: 12,
  },
  activeWrapper: {
    alignItems: 'center',
  },
  emptyTitle: { fontFamily: fonts.primary.medium, color: colours.dark.color, fontSize: 18 },
  bookCover: {
    width: '100%',
    height: 100,
  },
  title: {
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    fontSize: 14,
  },
  bookTitle: {
    fontFamily: fonts.primary.bold,
    color: colours.dark.color,
    fontSize: 24,
  },
  author: {
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    fontSize: 14,
    opacity: 0.6,
  },
});

export default Shelf;
