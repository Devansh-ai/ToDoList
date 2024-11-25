


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/homeScreen';
import NotesScreen from '../screens/notesScreen';


export default class AppNavigator extends Component {
    render() {
        const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen name='NotesScreen' component={NotesScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})





