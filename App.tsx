import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/screens/homeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import Card from './src/components/card';

const App = () => {

  return (
    <SafeAreaProvider style = {{flex: 1}}>
      <AppNavigator/>
      {/* <Card/> */}
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})