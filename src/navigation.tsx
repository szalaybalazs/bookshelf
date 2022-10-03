import { navigation } from '@/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useEffect } from 'react';

import { colours } from '@/config';
import Book from './pages/Book';
import Search from './pages/Search';
import Shelf from './pages/Shelf';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Screens: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Shelf' component={Shelf} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};

interface iNavigationProps {}

const Navigation: FC<iNavigationProps> = () => {
  useEffect(() => {
    (navigation.isMountedRef.current as any) = true;
  }, []);
  return (
    <NavigationContainer
      ref={navigation.navigationRef}
      theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: colours.dark.background } }}
    >
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Main' component={Screens} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
          <RootStack.Screen name='Book' component={Book} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
