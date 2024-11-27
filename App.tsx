import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/screens/homeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import Card from './src/components/card';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore } from 'redux-persist';

const App = () => {
  const persister = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <AppNavigator />
          {/* <Card/> */}
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})