import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    containerHead: {
        backgroundColor: colors.mainBg,
    },
    container: {
        backgroundColor: colors.mainBg,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop: Dimensions.get('screen').height * 0.02,
        bottom: Dimensions.get('screen').height * 0.04,
        paddingLeft: Dimensions.get('screen').width * 0.05,
    },
    addIcon: {

        height: 35,
        aspectRatio: 1,

    },
    audioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    audioIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    dotIcon: {
        height: 35,
        aspectRatio: 1,
        left: Dimensions.get('screen').width * .01,
    },
    text: {
        color: colors.secondaryBg,
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 10,
    }
})