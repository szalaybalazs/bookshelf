import { colours, fonts } from '@/config';
import { iAction } from '@/types';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Separator from './Separator';
import Action from './Action';
import locale from '@/localisation';

interface iLabelProps {
  label: string;
  action?: iAction;
}

const Label: FC<iLabelProps> = ({ label, action, children }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.label}>{locale(label)}</Text>
        {action && <Action {...action} />}
      </View>
      <Separator scale={2} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    opacity: 0.6,
  },
});

export default Label;
