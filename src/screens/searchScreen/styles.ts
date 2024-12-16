import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    back: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    head: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    card: {
        height: SCREEN_HEIGHT * 0.1
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.mainBg,
    },
    searchInput: {
        height: SCREEN_HEIGHT * .05,
        width: SCREEN_WIDTH * .8,
        borderWidth: 2,
        borderColor: colors.secondaryBg,
        padding: 10,
        borderRadius: 15,
        fontSize: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32,
    },
    emptyText: {
        color: '#666',
        fontSize: 16,
    },
});