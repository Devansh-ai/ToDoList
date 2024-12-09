import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, SafeAreaView,Image, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../../components/card';
import { colors } from '../../utils/color';
import { icons } from '../../assets';
import { styles } from './styles';


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
    const filteredNotes = notes.filter((note) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            note.title.toLowerCase().includes(searchTermLower) ||
            note.note.toLowerCase().includes(searchTermLower)
        );
    });


    const renderItem = ({ item,index }: { item: any,index:any }) =>{
        return (
        <TouchableOpacity onPress={
            ()=>{
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


export default SearchScreen;
