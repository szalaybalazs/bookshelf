import { colours } from '@/config';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface iBackgroundProps {
  padding?: number;
}

const Background: FC<iBackgroundProps> = ({ children, padding }) => {
  return <View style={[styles.wrapper, padding ? { paddingVertical: padding, paddingHorizontal: padding } : undefined]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colours.dark.foreground,
    borderRadius: 16,
  },
});

export default Background;
