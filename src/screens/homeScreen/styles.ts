import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    main: {
      backgroundColor: colors.mainBg,
      flex: 1,
    },
    rowFront: {
      backgroundColor: 'white',
      justifyContent: 'center',
      height: SCREEN_HEIGHT * 0.1
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      height: SCREEN_HEIGHT * 0.09
  
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
      backgroundColor: 'red',
      right: 0,
    },
  
    backTextWhite: {
      color: '#FFF',
    },
  });