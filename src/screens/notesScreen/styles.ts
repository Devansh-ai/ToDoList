import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex:1,
    // alignItems: 'center',
    // 

  },
  audioItem: {

    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.secondaryBg,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  title: {
    borderColor: 'white',
    // aspectRatio: 8,
    marginTop: 15,

    width: '98%',
    fontSize: 25,
    padding: 8,
    color: 'black',

  },
  note: {
    alignSelf:'center',
    // justifyContent:'center',
    backgroundColor:'red',
    borderColor: 'white',
    // marginTop: 10,
    width: '99%',
    fontSize: 18,
    padding: 10,
    color: 'black',

    height: SCREEN_HEIGHT * .7,
    // top:0,


  },
})