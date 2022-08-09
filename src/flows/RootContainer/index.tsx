import React from 'react';
import { Navigator } from '@routes/AppNavigator';
import { selectors } from '@state/selectors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

export const RootContainer: React.FC = () => {
  const appReady = useSelector(selectors.app.selectAppReadyState);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>{appReady && <Navigator />}</SafeAreaProvider>
    </>
  );
};
