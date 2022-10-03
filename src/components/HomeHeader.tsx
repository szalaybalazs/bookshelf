import { colours, fonts } from '@/config';
import navigation, { navigate } from '@/core/navigation';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
  useDerivedValue,
  SharedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Action from './Action';
import tinycolor from 'tinycolor2';

interface iHomeHeaderProps {
  avatar?: string;
  notifications?: number;
  title?: string;
  collapsedTitle?: string;
  background?: string;
  collapsed?: boolean;
  scrollOffset: SharedValue<number>;
}

const HomeHeader: FC<iHomeHeaderProps> = ({ title, background, collapsedTitle, scrollOffset }) => {
  const _handleProfile = useCallback(() => navigation.navigate('Profile'), []);
  const _handleSearch = () => navigate('Search');

  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [20, 60], [0, 1], Extrapolate.CLAMP),
    };
  });
  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [20, 60], [1, 0], Extrapolate.CLAMP),
    };
  });
  const collapsedTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [20, 60], [0, 1], Extrapolate.CLAMP),
    };
  });

  return (
    <View style={[styles.outerWrapper]}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.wrapper}>
          <View>
            <Action padding={12} color={colours.dark.color} icon='user' onPress={_handleProfile} />
          </View>
          <Animated.Text numberOfLines={1} style={[styles.title, titleStyle]}>
            {title}
          </Animated.Text>
          <Animated.Text numberOfLines={1} style={[styles.title, collapsedTitleStyle]}>
            {collapsedTitle || title}
          </Animated.Text>
          <View>
            <Action padding={12} color={colours.dark.color} icon='plus' onPress={_handleSearch} />
          </View>
        </View>
      </SafeAreaView>
      <Animated.View style={[styles.backdrop, backdropStyle, { backgroundColor: background || colours.dark.background }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  outerWrapper: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    fontSize: 14,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingHorizontal: 56,
    // backgroundColor: 'red',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
    zIndex: -1,
  },
});

export default HomeHeader;
