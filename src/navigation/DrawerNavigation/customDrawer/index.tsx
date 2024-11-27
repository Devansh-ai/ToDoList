import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/color'
import { drawer } from '../../../utils/Strings'
import { icons } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.head}>
                    Google Keeps
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonHead} onPress={() => navigation.navigate('HomeScreen')}>
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
            <TouchableOpacity style={styles.buttonHead}>
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
            <TouchableOpacity style={styles.buttonHead}>
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

const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
        margin: 5,
        tintColor: 'white',
    },
    buttonHead: {
        padding: 10,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: colors.secondaryBg,
        borderRadius: 25,
        margin: 10,
        flexDirection: 'row'
    },
    buttonTxt: {
        fontSize: 20,
        fontWeight: '500',
        margin: 5,
        color: 'white',
    },
    head: {
        color: colors.secondaryBg,
        fontSize: 25,
        paddingLeft: 8,
        fontWeight: '700',
        marginBottom: 20,

    },
    container: {
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        padding: 10,
        borderRadius: 20,
    }
})