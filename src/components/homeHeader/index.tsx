import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../assets'
import { colors } from '../../utils/color'

/**
 * 
 *  <Flatlist 
 *   numColumns={
 *   isGrid ? 2 : 1
 * }
 * 
 * renderItem = {
 * (item) => {
 *   <View style={{
 *   mh: isGrid ? 10 : 20,
 *   flex: 1
 * }}>
 * </View>
 * )}}
 * />
     
      */

const HomeHeader = () => {
  const [view,setView]=useState(false);
  return (
    <View style={styles.header}>

      <Image
        source={icons.bar}
        tintColor={colors.secondaryBg}
        style={styles.image}
      />
      <View style={styles.container}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={"gray"}
          style={styles.search}
        />
      </View>
      <TouchableOpacity onPress={()=>setView(!view)}>
        {/* <Image
          source={icons.tabView1}
        /> */}
        {view ? (<Image
        style={styles.viewIcon}
        source={icons.tabView1}
        />):(<Image
        style={styles.viewIcon}
          source={icons.tabView2}
          />)}
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  viewIcon:{
    height: 25,
    width: 25,
    // margin: ,
    resizeMode:'contain',
    tintColor:colors.secondaryBg,
    marginTop:7,


  },
  search: {
    padding: 5,
    height: SCREEN_HEIGHT * 0.035,
    width: SCREEN_WIDTH * .8,
    // borderWidth:2,
    // borderRadius:15,
    // backgroundColor:'kjbred'
  },
  header: {
    flexDirection: 'row',
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.secondaryBg,
    height: SCREEN_HEIGHT * 0.035,
    width: SCREEN_WIDTH * .8,
    margin: 5,

  },
  image: {
    height: 35,
    width: 35,
    margin: 5,


  },
})