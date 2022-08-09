import { InitialState } from '@react-navigation/routers';
import { Platform, StatusBar, StatusBarStyle } from 'react-native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationMap } from '@routes/NavigationMap';

export const navigationRef = createNavigationContainerRef<NavigationMap>();

export const navigate = (
  scene: keyof NavigationMap,
  props?: Record<string, unknown>,
) => navigationRef.current?.navigate(scene, props);

export const goBack = () => navigationRef.current?.goBack();

export const getActiveRouteName = (state: InitialState): string => {
  const route = state.routes[state.index ?? 0];

  if (route?.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route?.name;
};

export const setStatusBar = (screenName: string) => {
  const statusBar = getStatusBarStyle(screenName);

  StatusBar.setBarStyle(statusBar.style as StatusBarStyle);

  if (Platform.OS !== 'ios') {
    if (statusBar.bg) {
      StatusBar.setBackgroundColor(statusBar.bg);
    }

    StatusBar.setTranslucent(statusBar.translucent);
  }
};

const getStatusBarStyle = (screenName: string) => {
  switch (screenName) {
    case 'success':
    case 'error':
      return {
        style: 'light-content',
        bg: 'transparent',
        translucent: true,
      };
    default:
      return {
        style: 'dark-content',
        bg: 'transparent',
        translucent: true,
      };
  }
};
