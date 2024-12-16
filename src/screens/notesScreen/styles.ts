import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  playIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    flexBasis: 1,
  },
  // audioWave:{
  //   // resizeMode:'contain',
  //   tintColor:colors.secondaryBg,

  //   height:Dimensions.get('screen').height*0.2,
  //   // zIndex:-1,
  //   aspectRatio:2,
  //   // backgroundColor:'red'
  // },
  speechButton: {
    height:Dimensions.get('screen').height*.06,
    width:Dimensions.get('screen').width*.3,
    left:Dimensions.get('screen').width*.65,
    bottom:Dimensions.get('screen').height*.08,
    // position:'absolute',

    flexDirection: 'row', // Ensure the content is aligned horizontally
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    backgroundColor: colors.secondaryBg, // Use the primary color for the background
    // paddingVertical: 10, // Padding for the button
    // paddingHorizontal: 20, // Padding on the sides
    borderRadius: 30, // Rounded corners for the button
    // marginTop: 20, // Optional: spacing from the top
    zIndex: 1, // Ensure the button stays on top
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  speechText: {
    fontSize: 16, // Font size for the "Speak to Text" text
    color: colors.mainBg, // White text color
    fontWeight: 'bold', // Make the text bold
  },
  audioWave: {
    width:120, // Adjust size of the GIF to fit the button
    // width: Dimensions.get('screen').width * 0.1, // Adjust size of the GIF to fit the button
    height: 50, // Keep it square (or adjust to your desired aspect ratio)
    resizeMode: 'contain',
    // tintColor:'black',
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
    width: Dimensions.get('screen').width * 0.9,
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
    justifyContent: 'center',
  },
  note: {
    alignSelf: 'center',
    borderColor: 'white',
    width: '99%',
    fontSize: 18,
    padding: 10,
    color: 'black',
  },
});
