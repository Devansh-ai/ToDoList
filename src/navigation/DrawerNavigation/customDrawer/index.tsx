import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { drawer } from '../../../utils/Strings'
import { icons } from '../../../assets'
import { styles } from './styles'

/**
 * This is a custom drawer thst contains home screen and delete screen
 * 
 * 
 */
const CustomDrawer = ({ navigation }: { navigation: any }) => {
    //navigates to homescreen on press of notes button
    const handlehomepress = () => {
        navigation.navigate('HomeScreen')
    }
    //navigates to deletescreen on press of delete button

    const handleDeletePress = () => {
        navigation.navigate('DeletedScreen')
    }
    //opens link for help and support
    const handleOpenLink = () => {
        const url = 'https://support.google.com/keep/?hl=en#topic=6262468';
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.head}>
                    Google Keeps
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonHead} onPress={handlehomepress}>
                <Image
                    source={icons.bulb}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.note}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead}>
                <Image
                    source={icons.bell}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.remind}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead}>
                <Image
                    source={icons.add}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.label}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead}>
                <Image
                    source={icons.archive}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.archive}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead} onPress={handleDeletePress}>
                <Image
                    source={icons.delete}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.delete}

                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead}>
                <Image
                    source={icons.setting}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.set}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHead} onPress={handleOpenLink}>
                <Image
                    source={icons.help}
                    style={styles.icon}
                />
                <Text style={styles.buttonTxt}>
                    {drawer.help}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default CustomDrawer

