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
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import { icons } from '../../assets'

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const audioRecorderPlayer = new AudioRecorderPlayer();


const NotesScreen = ({ navigation }: { navigation: any }) => {
  interface RouteParams {
    id?: number;
    items?: any;
    flag?: boolean;
  }
  const dispatch = useDispatch();
  const route = useRoute();

  const [generatedColor, setGeneratedColor] = useState<string | null>(null);
  const { id = 0, items = '', flag = false } = (route.params as RouteParams) || {};
  const [title, setTitle] = useState<string>(items?.title || '');
  const [note, setNote] = useState<string>(items?.note || '');
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>(colors.theme);
  const [color, setColor] = useState<boolean>(false);
  const [imageUpload, setImageUpload] = useState<any>([]);
  const bgcColors: any = ["#EB9DA2", "#F0B884", "#E8E6A5", "#BBE8B5", "ACBBE8", "C5ACE8"]
  const [audioRecordings, setAudioRecordings] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(-1);

  useEffect(() => {
    if (items?.imageUri && items?.imageUri.length > 0) {
      setImageUpload(items?.imageUri);
    }
    if (items?.audioFiles && items?.audioFiles.length > 0) {
      setAudioRecordings(items?.audioFiles);
    }
  }, [items]);
  const handleStartRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(() => { });
      setIsRecording(true);
      return result;
    } catch (error) {
      Alert.alert('Error starting recording', error?.toString());
    }
  };

  const handleStopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setIsRecording(false);
      setAudioRecordings([...audioRecordings, result]);
      return result;
    } catch (error) {
      Alert.alert('Error stopping recording', error?.toString());
    }
  };

  const handlePlayRecording = async (audioPath: string, index: number) => {
    try {
      if (isPlaying && currentAudioIndex === index) {
        await audioRecorderPlayer.stopPlayer();
        setIsPlaying(false);
        setCurrentAudioIndex(-1);
        return;
      }

      if (isPlaying) {
        await audioRecorderPlayer.stopPlayer();
      }

      await audioRecorderPlayer.startPlayer(audioPath);
      setIsPlaying(true);
      setCurrentAudioIndex(index);

      audioRecorderPlayer.addPlayBackListener((e) => {
        if (e.currentPosition === e.duration) {
          setIsPlaying(false);
          setCurrentAudioIndex(-1);
          audioRecorderPlayer.removePlayBackListener();
        }
      });
    } catch (error) {
      Alert.alert('Error playing audio', error?.toString());
    }
  };

  const renderAudioRecordings = () => {
    return audioRecordings.map((path, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.audioItem]}
        onPress={() => handlePlayRecording(path, index)}
      >
        <Image
          source={isPlaying && currentAudioIndex === index ? icons.bell : icons.collab}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ color: colors.mainBg }}>Recording {index + 1}</Text>
      </TouchableOpacity>
    ));
  };

  useEffect(() => {
    return () => {
      if (isPlaying) {
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
      }
    };
  }, []);
  const handleCanvasSave = (uri: string) => {
    const newArr = [...imageUpload, uri];
    setImageUpload(newArr);
  };
  const handlePress = () => {
    if (flag === false && !generatedColor) {
      setGeneratedColor(color ? selectedColor : bgcColors[Math.floor(Math.random() * 5)]);
    }
    const noteData = {
      title,
      note,
      bgColor: generatedColor,
      uniqueId: Math.floor(Math.random() * 200),
      imageUri: imageUpload,
      audioFiles: audioRecordings,
    };
    if (note !== "" && title !== "" && flag === false) {
      dispatch(addNotes(noteData));
    }
    else if (flag) {
      dispatch(editNotes({
        id,
        item: {
          ...noteData,
        },
      }));
    }

    // navigation.navigate('HomeScreen');
    navigation.goBack();
  };



  const handleTitle = (text: any) => {
    setTitle(text);
  }

  const handleNote = (text: any) => {
    setNote(text);
  }
  const handleAudioPress = async () => {
    if (isRecording) {
      try {
        const result = await handleStopRecording();
      } catch (error) {
        Alert.alert('Error stopping recording', error?.toString());
      }
    } else {
      try {
        await handleStartRecording();
      } catch (error) {
        Alert.alert('Error starting recording', error?.toString());
      }
    }
  };
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
  const deleteOperation = () => {
    if (flag)
      dispatch(deleteNotes(id));
    navigation.navigate('HomeScreen');

  }
  const handleCanvasPress = () => {
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
              {renderAudioRecordings()}
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
        handleAudioPress={handleAudioPress}
        isRecording={isRecording}
      />
    </>
  )
}

export default NotesScreen

