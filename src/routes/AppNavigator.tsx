import React, { useCallback, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import {
  getActiveRouteName,
  navigationRef,
  setStatusBar,
} from '@utils/navigation';
import { useAndroidBackListener } from '@utils/hooks';
import { ROUTES } from '@typings/routeNames';
import MainNavigator from './MainNavigator';
import UnauthenticatedNavigator from './UnauthenticatedNavigator';
import { theme } from '@assets/theme';

const disabledAndroidBackScreens = new Set([ROUTES.HomeTab]);

let currentRouteName = 'unknown';
let previousRouteName = 'unknown';

export const getCurrentRouteName = (): string => currentRouteName;
export const getPreviousRouteName = (): string => previousRouteName;

const onAndroidBack = (): boolean =>
  disabledAndroidBackScreens.has(currentRouteName as ROUTES);

const Stack = createStackNavigator();

export const Navigator: React.FC = () => {
  useAndroidBackListener(onAndroidBack);

  useEffect(() => setStatusBar('root'), []);

  const onRouteChange = useCallback((state: NavigationState | undefined) => {
    if (state) {
      previousRouteName = currentRouteName;
      currentRouteName = getActiveRouteName(state);

      if (currentRouteName !== previousRouteName) {
        setStatusBar(currentRouteName);
      }
    }
  }, []);

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onStateChange={onRouteChange}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ROUTES.Main}
      >
        <Stack.Screen name={ROUTES.HomeTab} component={MainNavigator} />
        <Stack.Screen name={ROUTES.Main} component={UnauthenticatedNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
