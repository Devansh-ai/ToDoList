import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    head: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        marginBottom:5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        borderColor: colors.secondaryBg,
        borderWidth: 2,
    },
})