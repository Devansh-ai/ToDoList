import { StyleSheet } from "react-native"
import { colors } from "../../utils/color"


export const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'white',
        borderRadius: 100,
        position: 'absolute',
        padding: 10,
        bottom: 50,
        right: 10,
    },
    button: {
        height: 50, width: 50, resizeMode: 'contain',
        //tintColor:'white', 
    },
    outer: {
        backgroundColor: colors.secondaryBg,
        borderRadius: 100,
        padding: 5,
    },
})