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
        marginTop: SCREEN_HEIGHT * 0.07,
        marginBottom: SCREEN_HEIGHT * 0.01
    },
    image: {
        height: 40,
        width: 40,
    },
    imagePin: {
        height: 30,
        width: 30,
    },
    imageIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginHorizontal: 18,
    },
})