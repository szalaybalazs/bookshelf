import { colours } from '@/config';
import navigation, { navigate } from '@/core/navigation';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Action from './Action';

interface iHomeHeaderProps {
  avatar?: string;
  notifications?: number;
}

const HomeHeader: FC<iHomeHeaderProps> = () => {
  const _handleProfile = useCallback(() => navigation.navigate('Profile'), []);
  const _handleSearch = () => navigate('Search');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Action padding={12} color={colours.dark.color} icon='user' onPress={_handleProfile} />
        </View>
        <View>
          <Action padding={12} color={colours.dark.color} icon='plus' onPress={_handleSearch} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
  },
});

export default HomeHeader;
