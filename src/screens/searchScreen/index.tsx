import React, { useState } from 'react';
import { View, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../../components/card';
import { colors } from '../../utils/color';
import { icons } from '../../assets';
import { styles } from './styles';

const SearchScreen = ({ navigation }: { navigation: any }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const notes = useSelector((state: any) => state.configSlice.item);
    const filteredNotes = notes.filter((note: any) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            note.title.toLowerCase().includes(searchTermLower) ||
            note.note.toLowerCase().includes(searchTermLower)
        );
    });


    const renderItem = ({ item }: { item: any, index: any }) => {
        return (
            <TouchableOpacity onPress={
                () => {
                    navigation.navigate('NotesScreen', { id: item.uniqueId, items: item, flag: true });
                }
            }>
                <View style={styles.card}>

                    <Card
                        text1={item.title}
                        text2={item.note}
                        bgColor={item.bgColor}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity
                    onPress={handleBackPress}
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
