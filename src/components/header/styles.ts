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
        height: 35,
        width: 35,
        resizeMode: 'cover',
        transform: [{ rotate: '-45deg' }]
    },
    imageIcon: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginHorizontal: 18,
    },
})