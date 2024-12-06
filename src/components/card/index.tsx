import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const Card = ({ text1, text2,bgColor }: { text1: string, text2: string ,bgColor:string}) => {
    console.log("bgcc",bgColor)
    return (
        <View style={[styles.container,{backgroundColor:bgColor}]}>
            <Text style={styles.head}>
                {text1}
            </Text>
            <Text>
                {text2}
            </Text>


        </View>
    )
}

export default Card;
const styles = StyleSheet.create({
    head: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        // alignSelf:'center',
        borderColor: colors.secondaryBg,
        // backgroundColor:,
        borderWidth: 2


    },
})