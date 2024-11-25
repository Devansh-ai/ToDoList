import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    containerHead:{
        // position:'absolute',
        // bottom: 10,
        backgroundColor: colors.mainBg,
        // flex: 1,
        
    },
    container: {
        backgroundColor: colors.mainBg,
        alignItems: 'center',
        justifyContent:'space-evenly',
    //    flex:1,
       flexDirection: 'row',
        paddingTop: Dimensions.get('screen').height * 0.02,
       // height: '100%',
        // position:'absolute',
       bottom:30,
        // marginBottom:40,
    },
    addIcon: {

        height: 35,
        aspectRatio: 1,

    },
    button: {
        marginLeft: 19,
    },
    dotIcon: {
        height: 35,
        aspectRatio: 1,
        left: 45,
    },
    text: {
        color: colors.secondaryBg,
        fontSize: 16,
        marginTop: 10,
    }
})