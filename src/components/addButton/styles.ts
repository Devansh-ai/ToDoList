import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/color';

const SCREEN_HEIGHT = Dimensions.get('screen').height / 100;
const SCREEN_WIDTH = Dimensions.get('screen').width / 100;

export const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    padding: SCREEN_HEIGHT * 1,
    bottom: SCREEN_HEIGHT * 6,
    right: SCREEN_WIDTH * 2,
  },
  button: {
    height: SCREEN_HEIGHT * 4,
    width: SCREEN_WIDTH * 9,
    resizeMode: 'contain',
  },
  outer: {
    backgroundColor: colors.secondaryBg,
    borderRadius: 100,
    padding: SCREEN_HEIGHT * 1.5,
  },
});
