import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../assets';
import { styles } from './styles';

const AddButton = ({ onPress }: { onPress: any }) => {
  return (
    <View>
      <View style={styles.touchable}>
        <TouchableOpacity style={styles.outer} onPress={onPress}>

          <Image
            source={icons.add}
            style={styles.button}
            tintColor={'white'}
          />

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddButton;

