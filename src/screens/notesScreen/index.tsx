import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'
import { styles } from './styles'
import NotesFooter from '../../components/notesFooter'
import { colors } from '../../utils/color'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes, editNotes } from '../../Redux/config/configSlice'

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const NotesScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const route = useRoute();

  const { id = 0, items = '', flag = false } = route.params || {};
  const [title, setTitle] = useState<string>(items?.title || '');
  const [note, setNote] = useState<string>(items?.note || '');
  const [selectedColor, setSelectedColor] = useState<string>(colors.theme);
  const [imageUpload, setImageUpload] = useState<any>([]);
const handlePress = () => {
    navigation.goBack();
    if (note != "" && title != "" && flag === false) {

      dispatch(addNotes({ title, note }))

    }
    else {
      if (flag) {

        dispatch(editNotes({ item: { note, title }, id }))
      }
    }
  }

  const handleTitle = (text: any) => {
    setTitle(text);
  }

  const handleNote = (text: any) => {
    setNote(text);
  }

  const renderImage = () => {
    const imageCount = imageUpload.length;
    return (imageUpload ?? [])?.map?.((image: any, index: any) => {
      return (
        <View key={index} >
          <Image
            source={{ uri: image }}
            style={{ height: SCREEN_HEIGHT * .3 / imageCount, width: SCREEN_WIDTH * .7 / imageCount }}
          />
        </View>
      )
    }
    )
  }
  const renderItem = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

        {renderImage()}
      </View>
    )
  }
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.mainBg }} >
        <Header
          onPress={handlePress}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={[styles.container, { backgroundColor: selectedColor }]}>
            <View style={{ flex: 1 }}>
              {renderItem()}
            </View>
            <TextInput
              autoCapitalize='words'
              enablesReturnKeyAutomatically={true}
              keyboardAppearance='dark'
              maxLength={40}
              placeholderTextColor={'black'}
              placeholder='Title'
              style={styles.title}
              value={title}
              onChangeText={(text) => handleTitle(text)}
            />
            <TextInput
              enablesReturnKeyAutomatically={true}
              keyboardAppearance='dark'
              multiline={true}
              placeholderTextColor={'black'}
              placeholder='Note'
              style={styles.note}
              cursorColor={'white'}
              value={note}
              onChangeText={(text) => handleNote(text)}

            />
            <View>

            </View>
          </View>
        </ScrollView>
      </View>
      <NotesFooter
        onColorOptionPress={(color: string) => {
          setSelectedColor(color)
        }}
        imageUploadPress={(uri: string) => {
          const newArr = [...imageUpload, uri]
          setImageUpload(newArr);
        }}
      />
    </>
  )
}

export default NotesScreen

