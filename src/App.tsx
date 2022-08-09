import React, { memo, useEffect } from 'react';
import { RootContainer } from '@flows/RootContainer';
import { configStore } from '@state/store';
import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { actions } from '@state/actions';

const { store, persistor } = configStore();
export { store };
export const { dispatch } = store;
export const persistedStore = persistor;

export const App = memo(() => {
  useEffect(() => {
    dispatch(actions.app.bootstrap());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
});

const AnyText = Text as any;
AnyText.defaultProps = AnyText.defaultProps || {};
AnyText.defaultProps.allowFontScaling = false;
const AnyTextInput = TextInput as any;
AnyTextInput.defaultProps = AnyTextInput.defaultProps || {};
AnyTextInput.defaultProps.allowFontScaling = false;

App.displayName = 'App';
