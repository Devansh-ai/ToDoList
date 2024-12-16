
import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  viewIcon1: {
    height: SCREEN_HEIGHT * .04,
    width: SCREEN_WIDTH * .08,
    resizeMode: 'contain',
    tintColor: colors.secondaryBg,
    transform: [{ rotate: '90deg' }]
  },
  viewIcon2: {
    height: SCREEN_HEIGHT * .04,
    tintColor: colors.secondaryBg,
    width: SCREEN_WIDTH * .08,
    resizeMode: 'contain',
  },
  search: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: SCREEN_HEIGHT * .012,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  container: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.secondaryBg,
    backgroundColor: 'white',

    height: SCREEN_HEIGHT * 0.04,
    width: SCREEN_WIDTH * .8,
    justifyContent: 'center',
  },
  image: {
    height: SCREEN_HEIGHT * .04,
    width: SCREEN_WIDTH * .08,
  },
})