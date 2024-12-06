import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'
import { styles } from './styles'
import NotesFooter from '../../components/notesFooter'
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../utils/color'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes, deleteNotes, editNotes } from '../../Redux/config/configSlice'
import CanvasDrawing from '../../components/canvas'

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const NotesScreen = ({ navigation }: { navigation: any }) => {
  interface RouteParams {
    id?: number;    
    items?: any; 
    flag?: boolean; 
  }
  const dispatch = useDispatch();
  const route = useRoute();

  const { id = 0, items = '', flag = false } = (route.params as RouteParams) || {};
  // console.log("<<<<<<<<<<<",id)
  const [title, setTitle] = useState<string>(items?.title || '');
  const [note, setNote] = useState<string>(items?.note || '');
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>(colors.theme);
  const [color, setColor] = useState<boolean>(false);
  const [imageUpload, setImageUpload] = useState<any>([]);
  const bgcColors:any=["#EB9DA2","#F0B884","#E8E6A5","#BBE8B5","ACBBE8","C5ACE8"]
  const handleCanvasSave = (uri: string) => {
    const newArr = [...imageUpload, uri];
    setImageUpload(newArr);
  };
  const handlePress = () => {
    navigation.navigate('HomeScreen');
    if (note != "" && title != "" && flag === false) {
      {imageUpload?
        dispatch(addNotes({ title, note, bgColor: color? selectedColor:bgcColors[Math.floor(Math.random()*5)],uniqueId:Math.floor(Math.random()*200),imageUri:imageUpload}))
:
dispatch(addNotes({ title, note, bgColor: color? selectedColor:bgcColors[Math.floor(Math.random()*5)],uniqueId:Math.floor(Math.random()*200)}))
      }

    }
    else {
      if (flag) {

        dispatch(editNotes({ item: { note, title}, id }))
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
        <View key={index}>
          <Image
            source={{ uri: image }}
            style={{ 
              height: SCREEN_HEIGHT * 0.3 / imageCount, 
              width: SCREEN_WIDTH * 0.7 / imageCount,
              resizeMode: 'contain'
            }}
          />
        </View>
      );
    });
  };
  const renderItem = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

        {renderImage()}
      </View>
    )
  }
  const deleteOperation=()=>{
    if(flag)
      dispatch(deleteNotes(id));
    navigation.navigate('HomeScreen');

  }
  const handleCanvasPress = () => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqq")
    setShowCanvas(true);
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.mainBg }} >
        <Header
          onPress={handlePress}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={[styles.container, { backgroundColor: selectedColor }]}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity >
                <Text>
                  record
                </Text>
              </TouchableOpacity>
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
      {showCanvas && (
        <CanvasDrawing
          onSave={handleCanvasSave}
          onClose={() => setShowCanvas(false)}
        />
      )}
      <NotesFooter
      handleCanvasPress={handleCanvasPress}
        onColorOptionPress={(color: string) => {
          setSelectedColor(color)
          setColor(true);
        }}
        deleteOperation={deleteOperation}
        imageUploadPress={(uri: string) => {
          const newArr = [...imageUpload, uri]
          setImageUpload(newArr);
        }}
      />
    </>
  )
}

export default NotesScreen

