import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomBar from '../../components/bottomBar'
import AddButton from '../../components/addButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import NotesScreen from '../notesScreen'
import HomeHeader from '../../components/homeHeader'
import Card from '../../components/card'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const inset = useSafeAreaInsets()
    const handlePress = () => {
        console.log("sdfsfffs------------/////")
        navigation.navigate('NotesScreen')

    }
    return (
        <View style={[styles.main, { paddingTop: inset.top + 10 ,flex:1}]}>
            <HomeHeader/>

           <View style={{height:20,}}>

           </View>
           <ScrollView bounces={false} >
            
            
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            {/* <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            />
            <Card
            text1="Welcome to Notes"
            text2="Fuctions such as To-do List and Notes"
            /> */}
            {/* <Text>HomeScreen</Text> */}
            </ScrollView> 
            <BottomBar />
            <AddButton
                onPress={handlePress}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({ main: { flex: 1 } })