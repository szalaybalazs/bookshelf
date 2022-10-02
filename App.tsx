import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useEffect } from 'react';
import { navigation } from './src/core';
import { RecoilRoot } from 'recoil';

import Book from './src/pages/Book';
import Search from './src/pages/Search';
import Shelf from './src/pages/Shelf';
import { View } from 'react-native';
const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Screens: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Shelf' component={Shelf} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    (navigation.isMountedRef.current as any) = true;
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <RecoilRoot>
        <View style={{ flex: 1 }}>
          <NavigationContainer ref={navigation.navigationRef}>
            <RootStack.Navigator>
              <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name='Main' component={Screens} />
              </RootStack.Group>

              <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
                <RootStack.Screen name='Book' component={Book} />
              </RootStack.Group>
            </RootStack.Navigator>
          </NavigationContainer>
        </View>
      </RecoilRoot>
    </View>
  );
}
