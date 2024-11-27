import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/color';


const Colors = (props: any) => {
    const colors: string[] = [
        "#FF5733", "#33FF57", "#3357FF", "red", "green", "blue",
        "#FFD700", "#4B0082", "#FF4500", "#008080", "purple", "cyan",
        "#00FFFF", "#00008B", "#FF1493", "#FFDAB9", "orange", "pink",
        "#FF6347", "#40E0D0", "#8A2BE2", "#00FF7F", "#DC143C", "brown",
        "#B22222", "#FF00FF", "#2E8B57", "#7FFF00", "#D2691E", "teal"
    ]; const renderItem = (item: any, index: number) => {
        console.log(item, "fffffffffff")
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
        <View style={{ flex: 1 }}>
            <Text style={{ marginLeft: 15, color: '#8758c3', fontSize: 18, fontWeight: '600' }}>Colors</Text>
            <FlatList
                horizontal={true}
                data={colors}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
}

export default Colors

const styles = StyleSheet.create({})