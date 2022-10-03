import { colours, fonts } from '@/config';
import locale from '@/localisation';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon, { eIcon } from './icon';

interface iBannerProps {
  icon: eIcon;
  title: string;
  description: string;
}

const Banner: FC<iBannerProps> = ({ icon, title, description }) => {
  return (
    <View style={styles.wrapper}>
      <Icon icon={icon} color={colours.dark.color} width={64} height={64} />
      <Text style={styles.title}>{locale(title)}</Text>
      <Text style={styles.subtitle}>{locale(description)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.regular,
    color: colours.dark.color,
    textTransform: 'uppercase',
    marginTop: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colours.dark.color,
    opacity: 0.4,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Banner;
