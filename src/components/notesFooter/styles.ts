import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    containerHead: {
        backgroundColor: colors.mainBg,

    },
    container: {
        backgroundColor: colors.mainBg,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop: Dimensions.get('screen').height * 0.02,
        bottom: 30,
    },
    addIcon: {

        height: 35,
        aspectRatio: 1,

    },
    button: {
        marginLeft: 19,
    },
    dotIcon: {
        height: 35,
        aspectRatio: 1,
        left: 45,
    },
    text: {
        color: colors.secondaryBg,
        fontSize: 16,
        marginTop: 10,
    }
})