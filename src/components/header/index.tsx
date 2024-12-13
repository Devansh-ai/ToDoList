import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../assets'
import { styles } from './styles'
import { colors } from '../../utils/color'

/**
 * 
 * this is the header of notes screen
 */
const Header = ({ onPress,handlePin }: { onPress: any,handlePin:any }) => {
   const [isSelected, setIsSeleted] = useState<boolean>(false)
   const handleOnPress = () => {
      setIsSeleted(!isSelected)
      handlePin();

   }

   return (
      <View style={styles.main}>


         <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>

               <Image
                  source={icons.back}
                  style={styles.image}
                  tintColor={colors.secondaryBg}


               />
            </TouchableOpacity>
            <View style={styles.right}>
               <TouchableOpacity onPress={handleOnPress}>
                  <Image
                     source={isSelected ? icons.heartFilled : icons.pin}
                     resizeMode='contain'
                     tintColor={colors.secondaryBg}
                     style={styles.imagePin}
                  />
               </TouchableOpacity>
               <TouchableOpacity>

                  <Image
                     source={icons.bell}
                     tintColor={colors.secondaryBg}
                     style={styles.imageIcon}
                  />
               </TouchableOpacity>
               <TouchableOpacity>

                  <Image
                     source={icons.archive}
                     tintColor={colors.secondaryBg}
                     style={styles.imageIcon}
                  />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default Header

