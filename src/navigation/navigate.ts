import React from 'react';
import { NavigationContainerRef, CommonActions } from '@react-navigation/native';
import RootStackParamList from './type';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

interface NavigationParameters {
  [key: string]: any;
}

const navigateTo = (
  routeName: keyof RootStackParamList | null = null,
  params: NavigationParameters = {},
  resetStack = false,
) => {
  const navigation = navigationRef.current;
  return navigation?.navigate(routeName,params)
  // if (routeName) {
  //   if (resetStack) {
  //     const resetAction = CommonActions.reset({
  //       index: 0,
  //       routes: [{ name: routeName, params }],
  //     });
  //     return navigation?.dispatch(resetAction);
  //   }
  //   return navigation?.navigate(routeName, params);
  // }
  // return navigation?.goBack();
};

export default navigateTo;
