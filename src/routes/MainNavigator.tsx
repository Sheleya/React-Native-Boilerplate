import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '@typings/routeNames';
import { MainNavigationMap } from './NavigationMap';
import { HomeTabNav } from './HomeTabNav';

const MainStackNavigation = createStackNavigator<MainNavigationMap>();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStackNavigation;

  const navScreenOptions = {
    cardStyle: {},
  };

  return (
    <Navigator
      initialRouteName={ROUTES.HomeTab}
      screenOptions={navScreenOptions}
    >
      <Screen
        name={ROUTES.HomeTab}
        component={HomeTabNav}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default memo(MainNavigator);
