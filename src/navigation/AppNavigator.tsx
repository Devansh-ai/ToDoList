


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homeScreen';
import NotesScreen from '../screens/notesScreen';
import { MyDrawer } from './DrawerNavigation';
import SearchScreen from '../screens/searchScreen';


export default class AppNavigator extends Component {
    render() {
        const Stack = createNativeStackNavigator();

        return (
            <Stack.Navigator initialRouteName='Drawer' screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name='HomeScreen' component={HomeScreen} /> */}
                <Stack.Screen name='NotesScreen' component={NotesScreen} />
                <Stack.Screen name='SearchScreen' component={SearchScreen} />
                <Stack.Screen name='Drawer' component={MyDrawer} />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})





