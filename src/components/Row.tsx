import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface iRowProps {
  children?: any;
  padding?: number;
}

const Container: FC<iRowProps> = ({ children, padding }) => {
  return <View style={[styles.wrapper, { padding }]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Container;
