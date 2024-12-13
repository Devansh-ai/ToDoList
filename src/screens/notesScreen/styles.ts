import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius:20,
    // height:500
    flexBasis:1,

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
    marginTop: 15,
    width: '98%',
    fontSize: 25,
    padding: 8,
    color: 'black',
    
  },
  flexrap:{ flexDirection: 'row', flexWrap: 'wrap',margin:5,justifyContent:'center' },
  note: {

    alignSelf:'center',
    borderColor: 'white',
    width: '99%',
    fontSize: 18,
    padding: 10,
    color: 'black',
// height: SCREEN_HEIGHT * .7,
  },
})