import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Colors = (props: any) => {
    const colors: string[] = [
        "lightpink",
        "lightblue",
        "lightgreen",
        "lightyellow",
        "lightsalmon",
        "lightcoral",
        "lavender",
        "thistle",
        "peachpuff"
    ]; const renderItem = (item: any, index: number) => {
        return (
            <Pressable onPress={() => {
                props?.onColorOptionPress(item, index)

            }} style={{
                backgroundColor: item,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'white',
                height: 50,
                width: 50,
                margin: 10,
            }} />
        )

    }
    return (
        <View style={styles.head}>
            <Text style={styles.headTxt}>Colors</Text>
            <FlatList
                horizontal={true}
                data={colors}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
}

export default Colors

const styles = StyleSheet.create({
    head: {
        flex: 1
    },
    headTxt:
    {
        marginLeft: 15,
        color: '#8758c3',
        fontSize: 18,
        fontWeight: '600'
    }
})