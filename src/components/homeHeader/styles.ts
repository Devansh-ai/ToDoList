import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  viewIcon1: {
    height: 23,
    width: 28,
    resizeMode: 'contain',
    tintColor: colors.secondaryBg,
    transform: [{ rotate: '90deg'}]
},
  viewIcon2: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.secondaryBg,
},
  search: {
    height: SCREEN_HEIGHT*.05,
    width:SCREEN_WIDTH*.8,
    borderWidth: 2,
    borderColor:colors.secondaryBg,
    padding:10,
    borderRadius: 15,
    fontSize: 16,
},
  header: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  container: {
    backgroundColor: 'white',
    borderColor: colors.secondaryBg,
    height: SCREEN_HEIGHT * 0.035,
    width: SCREEN_WIDTH * .8,
    justifyContent:'center',
  },
  image: {
    height: 40,
    width: 40,
  },
})