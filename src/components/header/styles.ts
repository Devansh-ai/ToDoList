import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../utils/color";

const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    right: {
        flexDirection: 'row',
    },
    main: {
        backgroundColor: colors.mainBg,

    },
    container: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SCREEN_HEIGHT * 0.015,
        marginBottom: SCREEN_HEIGHT * 0.02
    },
    image: {
        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1.5

    },
    imagePin: {
        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1,
        marginHorizontal: 10,
    },
    imageIcon: {
        height: SCREEN_HEIGHT * 0.03,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginHorizontal: 10,
        marginRight: 15,
    },
})