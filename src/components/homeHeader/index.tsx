import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../assets'
import { colors } from '../../utils/color'

const HomeHeader = ({ onPress, view, onPressDrawer,onSearchPress }: { onPress: any, view: any, onPressDrawer: any,onSearchPress:any }) => {

  return (
    <View style={styles.header}>

      <TouchableOpacity onPress={onPressDrawer}>

        <Image
          source={icons.bar}
          tintColor={colors.secondaryBg}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={onSearchPress}>
        <Text style={styles.search}>
        Search
        </Text>
          {/* placeholder='Search'
          placeholderTextColor={"gray"} */}
          
        {/* /> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={{justifyContent:'center'}}>
        {view===2 ? (<Image
          style={styles.viewIcon2}
          source={icons.tabView2}
        />) : (<Image
          style={styles.viewIcon1}
          source={icons.tabView1}
        />)}
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  viewIcon1: {
    height: 23,
    width: 28,
    // margin: ,
    resizeMode: 'contain',
    tintColor: colors.secondaryBg,
    // marginTop: 7,
    transform: [{ rotate: '90deg'}]


  },
  viewIcon2: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.secondaryBg,
    // marginTop: 7,



  },
  // search: {
  //   paddingLeft: 10,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   color:'grey',
  //   // height: SCREEN_HEIGHT * 0.035,
  //   // width: SCREEN_WIDTH * .8,
  // },
  search: {
    height: SCREEN_HEIGHT*.05,
    width:SCREEN_WIDTH*.8,
    borderWidth: 2,
    borderColor:colors.secondaryBg,
    padding:10,
    borderRadius: 15,
    // paddingHorizontal: 16,
    // marginBottom: 16,
    fontSize: 16,
},
  header: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  container: {
    backgroundColor: 'white',
    // borderWidth: 2,
    // borderRadius: 11,
    borderColor: colors.secondaryBg,
    height: SCREEN_HEIGHT * 0.035,
    width: SCREEN_WIDTH * .8,
    justifyContent:'center',
    // alignItems:'center'
    // margin: 5,

  },
  image: {
    height: 40,
    width: 40,
    // margin: 5,


  },
})