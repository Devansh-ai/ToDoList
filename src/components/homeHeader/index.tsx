import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../assets'
import { colors } from '../../utils/color'
import { styles } from './styles'

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
