import * as React from 'react';
import { StackActions, DrawerActions } from '@react-navigation/native';

// Refs
export const isMountedRef = React.createRef<any>();
export const navigationRef = React.createRef<any>();

// Navigate to screen
export const navigate = (name: string, params: any = {}) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  } else setTimeout(() => navigate(name, params), 100);
};

// Jumpo to screen
export const jump = (name: string, params: any = {}) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate('Home', { screen: name, params });
  } else setTimeout(() => jump(name, params), 100);
};

// Replace screen
export const replace = (name: string, params: any = {}) => {
  if (isMountedRef.current && navigationRef.current) {
    try {
      navigationRef.current.dispatch(StackActions.replace(name, params));
    } catch (error) {
      setTimeout(() => replace(name, params), 100);
    }
  } else setTimeout(() => replace(name, params), 100);
};

// Pop screen
export const pop = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.pop(1));
  } else setTimeout(() => pop(), 100);
};

// Pop to top screen
export const popToTop = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  } else setTimeout(() => popToTop(), 100);
};

// Open drawer
export const openDrawer = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  } else setTimeout(() => openDrawer(), 100);
};

// Close drawer
export const closeDrawer = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.closeDrawer());
  } else setTimeout(() => closeDrawer(), 100);
};
// Close drawer
export const toggleDrawer = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.toggleDrawer());
  } else setTimeout(() => toggleDrawer(), 100);
};
export const navigation = {
  isMountedRef,
  navigationRef,
  navigate,
  replace,
  pop,
  popToTop,
  openDrawer,
  closeDrawer,
  toggleDrawer,
  jump,
};

export default navigation;
