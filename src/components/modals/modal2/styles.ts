import { StyleSheet } from "react-native"
import { colors } from "../../../utils/color"


export const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    modalContent: {
        backgroundColor: colors.theme,
        borderRadius: 12,
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
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 8,
        color: colors.secondaryBg,
    },
    modalButton: {
        flexDirection: 'row',
        padding: 30,
    },
    modalButtonTextDelete:
    {
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 8,
        color: colors.secondaryBg,

    },

})