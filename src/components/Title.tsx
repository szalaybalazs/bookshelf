import { colours, fonts } from '@/config';
import locale from '@/localisation';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface iTitleProps {
  title?: string;
  subtitle?: string;
  error?: boolean;
}

const Title: FC<iTitleProps> = ({ title, subtitle, error }) => {
  return (
    <View style={styles.wrapper}>
      {title && <Text style={styles.title}>{locale(title)}</Text>}
      {subtitle && <Text style={[styles.subtitle, error && styles.error]}>{locale(subtitle)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    minHeight: 82,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    opacity: 0.6,
    marginTop: 8,
    textAlign: 'center',
  },
  error: {
    color: colours.dark.coral,
  },
});

export default Title;
