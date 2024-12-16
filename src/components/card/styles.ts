import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    head: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: Dimensions.get('screen').width * 0.05,
        margin: 10,
        borderRadius: 20,
        borderColor: colors.secondaryBg,
        borderWidth: 2,
    },
})