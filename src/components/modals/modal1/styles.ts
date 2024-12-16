import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/color";


export const styles = StyleSheet.create({
    modalContainer: {
        marginVertical: 15,
    },
    modalContent: {
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
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
        paddingLeft: 10,
        color: colors.secondaryBg,
    },
    modalButton: {
        flexDirection: 'row',
        padding: Dimensions.get('screen').height * .02
    },


})
