import { colours } from '@/config';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

interface iModalProps {
  modalRef: React.Ref<View>;
  offset: Animated.SharedValue<number>;
  children?: any;
}

const ModalBody: FC<iModalProps> = ({ children, offset, modalRef }) => {
  const transform = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));
  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View style={[styles.container, transform]}>
        <View ref={modalRef}>{children}</View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
  container: {
    backgroundColor: colours.dark.background,
    borderRadius: 24,
    paddingHorizontal: 24,
  },
});

export default ModalBody;
