import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/color';

const Card = ({ text1 , text2}:{ text1:string, text2:string}) => {
    // console.log("first",props)
  return (
    <View style={styles.container}>
        <Text style={styles.head}>
            {text1}
        </Text>
        <Text>
            {text2}
        </Text>

   
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    head:{fontSize:20,
        color:'black',
        fontWeight:'600',
    },
    container:{
        flex:1,
        justifyContent:'center',
    // alignSelf:'flex-start',
        backgroundColor:'white',
        padding:10,
        margin:10,
        borderRadius:20,
        borderColor:colors.secondaryBg,

        borderWidth:2


    },
})