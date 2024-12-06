import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, SafeAreaView,Image, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../../components/card';
import { colors } from '../../utils/color';
import { icons } from '../../assets';


interface RootState {
    configSlice: {
        item: Array<{
            title: string;
            note: string;
            bgColor?: string;
        }>;
    };
}

const SearchScreen = ({navigation}:{navigation:any}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');


    const notes = useSelector((state: RootState) => state.configSlice.item);

        console.log("n otes",notes);
    const filteredNotes = notes.filter((note) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            note.title.toLowerCase().includes(searchTermLower) ||
            note.note.toLowerCase().includes(searchTermLower)
        );
    });


    const renderItem = ({ item,index }: { item: any,index:any }) =>{
        console.log("vvvvvvvvvv",item)
        return (
        <TouchableOpacity onPress={
            ()=>{
                console.log("item",item,item.uniqueId)
                navigation.navigate('NotesScreen', { id: item.uniqueId, items: item, flag: true });
            }
        }>

        <Card
            text1={item.title}
            text2={item.note}
            bgColor={item.bgColor}  
            />
            </TouchableOpacity>
    )}

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.head}>
           <TouchableOpacity 
           onPress={()=>navigation.goBack()}
           >

            <Image
            source={icons.back}
            style={styles.back}
            tintColor={colors.secondaryBg}
            />
            </TouchableOpacity>
            <TextInput
                style={styles.searchInput}
                placeholder="Search notes by title or content..."
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholderTextColor="#666"
                />
                </View>

            <FlatList
                data={filteredNotes}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                // contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    searchTerm ? (
                        <View style={styles.emptyContainer}>
                           <Image
                           source={icons.resultnf}
                           resizeMode='contain'
                           />
                        </View>
                    ) : null
                }
            />
        </SafeAreaView>
    );
};
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    back: {
        height: 40,
        width: 40,
        resizeMode:'contain',
    },
    head:{
        justifyContent:'space-evenly',
        flexDirection:'row',

    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.mainBg,
    },
    searchInput: {
        height: SCREEN_HEIGHT*.05,
        width:SCREEN_WIDTH*.8,
        borderWidth: 2,
        borderColor:colors.secondaryBg,
        padding:10,
        borderRadius: 15,
        // paddingHorizontal: 16,
        // marginBottom: 16,
        fontSize: 16,
    },
    listContainer: {
        // flexGrow: 1,
        // gap: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32,
    },
    emptyText: {
        color: '#666',
        fontSize: 16,
    },
});

export default SearchScreen;
