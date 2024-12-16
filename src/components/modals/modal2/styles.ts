
import { StyleSheet } from "react-native"
import { colors } from "../../../utils/color"


export const styles = StyleSheet.create({
    modalContainer: {
        marginVertical: 10,
    },
    modalContent: {
        backgroundColor: colors.theme,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
    },
    buttonIcon: {
        height: 25,
        width: 25,
    },
    modalButtonText: {
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 8,
        color: colors.secondaryBg,
    },
    modalButton: {
        flexDirection: 'row',
        padding: 20,
    },
    modalButtonTextDelete:
    {
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 8,
        color: colors.secondaryBg,

    },

})