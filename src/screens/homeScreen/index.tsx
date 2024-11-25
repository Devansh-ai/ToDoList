import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomBar from '../../components/bottomBar'
import AddButton from '../../components/addButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HomeHeader from '../../components/homeHeader'
import Card from '../../components/card'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Item {
    title: string,
    note: string,
}

const HomeScreen = ({ navigation }: { navigation: any }) => {

    let STORAGE_KEY = '@user_input';

    const inset = useSafeAreaInsets();
    const [view, setView] = useState(false);
    const [notesData, setNotesData] = useState<Item[]>([]);



    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, notesData)
            Alert.alert('Data successfully saved')
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
    }
    const readData = async () => {
        try {
            const value: any = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                setNotesData(value);
            }
        } catch (e) {
            Alert.alert('Failed to fetch the input from storage');
        }
    };
    useEffect(() => {
        readData();
    }, []);
    const handlePress = () => {
        navigation.navigate('NotesScreen', {
            onGoBack: (data: Item) => {
                setNotesData((prevData: any) => [...prevData, { data }])
                saveData();
                console.log("notesdata", notesData);
            }
        })

    }
    const handleView = () => {
        setView(!view);
    }
    const renderItem = (item: any, index: number) => {
        console.log("itemNotes", item.item.data.note)
        return (
            <Card
                text1={item.item.data.title}
                text2={item.item.data.note}
            />
        )
    }
    return (
        <View style={[styles.main, { paddingTop: inset.top + 10, flex: 1 }]}>
            <HomeHeader
                onPress={handleView}
                view={view}
            />

            <View style={{ height: 20, }}>

            </View>
            <FlatList

                data={notesData}
                numColumns={
                    view ? 2 : 1
                }
                renderItem={renderItem}
            />
            <BottomBar />
            <AddButton
                onPress={handlePress}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({ main: { flex: 1 } })