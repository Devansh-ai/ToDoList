import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {

    alignItems: 'center',

  },
  title: {
    borderColor: 'white',
    aspectRatio: 8,
    marginTop: 15,
    width: '98%',
    fontSize: 25,
    padding: 8,
    color: 'black',

  },
  note: {
    borderColor: 'white',
    marginTop: 10,
    width: '98%',
    fontSize: 18,
    padding: 8,
    color: 'black',
    height: SCREEN_HEIGHT * .7,


  },
})