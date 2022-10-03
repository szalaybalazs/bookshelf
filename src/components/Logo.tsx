import { colours } from '@/config';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface iLogoProps {}

const Logo: FC = () => {
  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: 128,
    height: 128,
    backgroundColor: colours.dark.color,
    borderRadius: 500,
  },
});

export default Logo;
