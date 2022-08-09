import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '@typings/routeNames';
import { UnauthenticatedNavigationMap } from './NavigationMap';
import Login from '@flows/Login';

const MainStackNavigation =
  createStackNavigator<UnauthenticatedNavigationMap>();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStackNavigation;

  return (
    <Navigator initialRouteName={ROUTES.Main}>
      <Screen
        name={ROUTES.Main}
        component={Login.MainScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default memo(MainNavigator);
