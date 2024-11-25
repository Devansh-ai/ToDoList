import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../assets'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/color'

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <TouchableOpacity >

          <Image
            style={styles.image}
            source={icons.pen}
            tintColor={colors.secondaryBg}
          />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image
            source={icons.mic}
            style={styles.image}
            tintColor={colors.secondaryBg}
          />
        </TouchableOpacity>
        <TouchableOpacity>

          <Image
            source={icons.camera}
            style={styles.image}
            tintColor={colors.secondaryBg}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomBar

