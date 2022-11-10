import { Button, HomeHeader, Separator } from '@/components';
import BookShelf from '@/components/BookShelf';
import { colours, fonts } from '@/config';
import { useModal } from '@/hooks/useModal';
import { BookSelectorModal } from '@/modals';
import { activeBookSelector } from '@/recoil/selectors/active';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { max, min, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigation } from '@/core';

interface iShelfProps {}

const initialHeight = 400;

const Shelf: FC<iShelfProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const active = useRecoilValue(activeBookSelector);
  const modal = useModal();
  const scrollOffset = useSharedValue(0);

  const _handleSelect = () => modal.presentModal(<BookSelectorModal />);
  const _handleScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }: any) => {
    setIsCollapsed(y > 20);
    scrollOffset.value = y;
    console.log(y);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: Math.min(0, scrollOffset.value) }],
      height: 400 - Math.min(0, scrollOffset.value),
    };
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.y;
  });
  const insets = useSafeAreaInsets();

  const _handleOpen = () => navigation.navigate('BookFinish', { book: active });

  return (
    <>
      <HomeHeader
        background={active?.colour}
        collapsed={isCollapsed}
        scrollOffset={scrollOffset}
        title={'Currently reading'}
        collapsedTitle={active?.title}
      />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={1}
        snapToEnd={false}
        snapToOffsets={[0, initialHeight - insets.top - 42 - 8]}
      >
        <View style={{ height: initialHeight }}>
          <Animated.View style={animatedStyles}>
            <Pressable onPress={_handleOpen} style={{ flex: 1 }}>
              <LinearGradient style={{ flex: 1 }} colors={[active?.colour || colours.dark.background, colours.dark.background]}>
                <SafeAreaView edges={['top']} style={{ flex: 1 }}>
                  <View style={{ height: 42 }} />
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
                          <Image resizeMode='contain' source={{ uri: active.cover }} style={styles.bookCover} />
                          <Separator />
                          <Text adjustsFontSizeToFit numberOfLines={3} style={styles.bookTitle}>
                            {active.title}
                          </Text>
                          <Separator scale={1} />
                          <Text style={styles.author}>By {active.authors.join(', ').replace(/\s+/, ' ')}</Text>
                        </>
                      )}
                    </View>
                  </View>
                </SafeAreaView>
              </LinearGradient>
            </Pressable>
          </Animated.View>
        </View>
        <BookShelf />
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bookWrapper: {
    padding: 24,
    paddingTop: 12,
    flex: 1,
  },
  activeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    textAlign: 'center',
  },
  author: {
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
});

export default Shelf;
