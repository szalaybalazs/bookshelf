import React, { FC } from 'react';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface iCenterProps {
  padding?: boolean;
  directions?: ('VERTICAL' | 'HORIZONTAL')[];
  children?: ReactNode | ReactNode[];
}

const Container: FC<iCenterProps> = ({ padding, directions, children }) => {
  return (
    <View
      style={[
        padding && styles.padding,
        styles.wrapper,
        directions?.includes('VERTICAL') && styles.vertical,
        directions?.includes('HORIZONTAL') && styles.horizontal,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  vertical: {
    alignItems: 'center',
  },
  padding: {
    paddingHorizontal: 24,
  },
  horizontal: {
    justifyContent: 'center',
  },
});

export default Container;
