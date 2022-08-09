import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { ROUTES } from '@typings/routeNames';
import React from 'react';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarHideOnKeyboard: true,
};

export const HomeTabNav: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={ROUTES.Dashboard}
        component={() => <></>}
        options={{
          headerShown: false,
          title: theme.Test[50],
          tabBarIcon: () => <View />,
        }}
      />
    </Tab.Navigator>
  );
};
