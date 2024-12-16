import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    containerHead: {
        backgroundColor: colors.mainBg,
    },
    container: {
        backgroundColor: colors.mainBg,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop: SCREEN_HEIGHT * 0.02,
        bottom: SCREEN_HEIGHT * 0.04,
        paddingLeft: SCREEN_WIDTH * 0.05,
    },
    addIcon: {

        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1,

    },
    audioButton: {
    },
    audioIcon: {
        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    dotIcon: {
        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1,
    },
    text: {
        color: colors.secondaryBg,
        fontSize: 16,
        alignSelf: 'center',
        marginHorizontal: SCREEN_WIDTH * 0.06,
    }
})