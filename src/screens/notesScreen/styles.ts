import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
  playIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  container: {
    flex: 1,
    borderRadius: 20,
    flexBasis: 1,
  },
  audioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    marginVertical: 5,
    backgroundColor: colors.secondaryBg,
    borderRadius: 15,
    alignSelf: 'center',
    width: Dimensions.get('screen').width * .9,
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
  flexrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    justifyContent: 'center'
  },
  note: {
    alignSelf: 'center',
    borderColor: 'white',
    width: '99%',
    fontSize: 18,
    padding: 10,
    color: 'black',
  },
})