import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Card = ({ text1, text2, bgColor }: { text1: string, text2: string, bgColor: string }) => {
    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={styles.head}>
                {text1}
            </Text>
            <Text >
                {text2}
            </Text>
        </View>
    )
}

export default Card;
