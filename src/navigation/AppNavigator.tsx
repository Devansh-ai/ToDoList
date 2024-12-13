


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from '../screens/notesScreen';
import { MyDrawer } from './DrawerNavigation';
import SearchScreen from '../screens/searchScreen';
import SpeechToTxtScreen from '../screens/speechToTxtScreen';

export default class AppNavigator extends Component {
    render() {
        const Stack = createNativeStackNavigator();

        return (
            <Stack.Navigator initialRouteName='Drawer' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='NotesScreen' component={NotesScreen} />
                <Stack.Screen name='SearchScreen' component={SearchScreen} />
                <Stack.Screen name='SpeechToTxtScreen' component={SpeechToTxtScreen} />
                <Stack.Screen name='Drawer' component={MyDrawer} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})





