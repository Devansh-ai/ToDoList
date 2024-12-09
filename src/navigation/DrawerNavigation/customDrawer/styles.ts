import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../utils/color";

export const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
        margin: 5,
        tintColor: 'white',
    },
    buttonHead: {
        padding: 10,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: colors.secondaryBg,
        borderRadius: 25,
        margin: 10,
        flexDirection: 'row'
    },
    buttonTxt: {
        fontSize: 20,
        fontWeight: '500',
        margin: 5,
        color: 'white',
    },
    head: {
        color: colors.secondaryBg,
        fontSize: 25,
        paddingLeft: 8,
        fontWeight: '700',
        marginBottom: 20,

    },
    container: {
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        padding: 10,
        borderRadius: 20,
    }
})