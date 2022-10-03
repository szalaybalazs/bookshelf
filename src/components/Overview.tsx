import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from './icon';
import Action from './Action';
import { colours, fonts } from '@/config';
import Separator from './Separator';

interface iOverviewProps {
  account: string;
  username: string;
  amountInNative: number;
  onSend: () => void;
  onReceive: () => void;
  onSwap: () => void;
  onAccountChange: () => void;
}

const Overview: FC<iOverviewProps> = ({ account, onAccountChange, username, amountInNative, onSend, onReceive, onSwap }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Pressable onPress={onAccountChange} style={styles.account}>
          <Text style={styles.accountLabel}>{account}</Text>
          <View style={styles.chevron}>
            <Icon icon='chevron-down' color={colours.dark.color} />
          </View>
        </Pressable>
        <Text style={styles.usernameLabel}>{username}</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.amount}>${amountInNative.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Action onPress={onSend} icon='send' />
        <Separator horizontal scale={6} />
        <Action onPress={onReceive} icon='download' />
        <Separator horizontal scale={6} />
        <Action onPress={onSwap} icon='repeat' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    backgroundColor: colours.dark.foreground,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    marginRight: 8,
  },
  chevron: {
    opacity: 0.4,
  },
  usernameLabel: {
    fontSize: 16,
    fontFamily: fonts.code.medium,
    color: colours.dark.primary,
  },
  center: {
    paddingVertical: 32,
  },
  amount: {
    fontSize: 36,
    fontFamily: fonts.code.medium,
    color: colours.dark.color,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    opacity: 0.4,
  },
});

export default Overview;
