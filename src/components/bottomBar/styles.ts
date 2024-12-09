import { Dimensions, StyleSheet } from "react-native"
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    image: {
        height: SCREEN_HEIGHT * 0.07, width: SCREEN_WIDTH * 0.07,
        resizeMode: 'contain',
        margin: 10,
        bottom: 0,

    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        paddingLeft: SCREEN_WIDTH * 0.07,
    },
    container: {
        justifyContent: 'flex-end',
        flex: 1,

    }
})