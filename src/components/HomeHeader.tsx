import { colours } from '@/config';
import { scanCode } from '@/core';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Separator from './Separator';
import Action from './Action';
import navigation from '@/core/navigation';

interface iHomeHeaderProps {
  avatar?: string;
  notifications?: number;
}

const HomeHeader: FC<iHomeHeaderProps> = () => {
  const _handleNotifications = () => alert('notifications');
  const _handleProfile = useCallback(() => navigation.navigate('Profile'), []);
  const _handleScan = () => scanCode();
  return (
    <>
      <Separator scale={2} />
      <View style={styles.wrapper}>
        <View>
          <Action padding={12} color={colours.dark.color} icon='user' onPress={_handleProfile} />
        </View>
        <View style={styles.actions}>
          <Action offset padding={12} icon='scan' onPress={_handleScan} />
          <Action padding={12} background={colours.dark.foreground} icon='bell' onPress={_handleNotifications} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
  },
});

export default HomeHeader;
