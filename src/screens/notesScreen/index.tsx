import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import {styles} from './styles';
import NotesFooter from '../../components/notesFooter';
import {colors} from '../../utils/color';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  addNotes,
  deleteNotes,
  editNotes,
  pinNotes,
} from '../../Redux/config/configSlice';
import CanvasDrawing from '../../components/canvas';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {icons} from '../../assets';
import SpeechToTextService from '../../utils/SpeechToTextService';

/**
 * this is the main notes screen the allows user
 * to edit the note and add new notes
 */
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const audioRecorderPlayer = new AudioRecorderPlayer();

const NotesScreen = ({navigation}: {navigation: any}) => {
  interface RouteParams {
    id?: number;
    items?: any;
    flag?: boolean;
    result?: string;
  }
  const dispatch = useDispatch();
  const route = useRoute();

  const {
    id = 0,
    items = '',
    flag = false,
    result = '',
  } = (route.params as RouteParams) || {};
  const [title, setTitle] = useState<string>(items?.title || '');
  let noteContent;
  if (items !== '' && result !== '') noteContent = items?.note + result;
  else if (result) noteContent = result;
  else noteContent = items?.note;
  const [note, setNote] = useState<string>(noteContent || '');
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>(colors.theme);
  const [color, setColor] = useState<boolean>(false);
  const [pin, setPin] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [imageUpload, setImageUpload] = useState<any>([]);
  const bgcColors: any = [
    '#F0F8FF', // Alice Blue
    '#FFF0F5', // Lavender Blush
    '#F5FFFA', // Mint Cream
    '#FFFFF0', // Ivory
    '#FFFFE0', // Light Yellow
    '#FFDAB9', // Peach Puff
    '#B0E0E6', // Powder Blue
    '#F0FFF0', // Honeydew
    '#FFF5EE', // Seashell
    '#FDF5E6', // Old Lace
    '#FFE4E1', // Misty Rose
    '#FFFACD', // Lemon Chiffon
    '#FFFAF0', // Floral White
    '#FFF8DC', // Cornsilk
    '#E0FFFF', // Light Cyan
    '#FAFAD2', // Light Goldenrod Yellow
    '#E6E6FA', // Lavender
    '#F5F5DC', // Beige
    '#F8F8FF', // Ghost White
    '#F5F5F5', // White Smoke
  ];
  const [audioRecordings, setAudioRecordings] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(-1);
  console.log('aaaaaaaaaaaaaaaaa', note);
  useEffect(() => {
    return () => {
      if (isPlaying) {
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
      }
    };
  }, []);
  useEffect(() => {
    if (items?.imageUri && items?.imageUri.length > 0) {
      setImageUpload(items?.imageUri);
    }
    if (items?.audioFiles && items?.audioFiles.length > 0) {
      setAudioRecordings(items?.audioFiles);
    }
  }, [items]);
  //renders audio recorder
  const handleStartRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(() => {});
      setIsRecording(true);
      return result;
    } catch (error) {
      Alert.alert('Error starting recording', error?.toString());
    }
  };
  //stops the recorder and saves its response in state
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
  //renders the previosly recorded audio file
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
      audioRecorderPlayer.addPlayBackListener(e => {
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
        onPress={() => handlePlayRecording(path, index)}>
        <Image
          source={
            isPlaying && currentAudioIndex === index ? icons.pause : icons.play
          }
          style={styles.playIcon}
          tintColor={colors.mainBg}
        />
        <Text style={{color: colors.mainBg}}>Recording {index + 1}</Text>
      </TouchableOpacity>
    ));
  };
  const onShare = async () => {
    try {
      const noteData = title + ' ' + note;
      const result = await Share.share({
        message: noteData,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const handleCanvasSave = (uri: string) => {
    const newArr = [...imageUpload, uri];
    setImageUpload(newArr);
  };
  const handlePress = () => {
    let colorToUse;
    if (flag === false) {
      colorToUse = color
        ? selectedColor
        : bgcColors[Math.floor(Math.random() * 20)];
    }
    const noteData = {
      title,
      note,
      bgColor: colorToUse,
      uniqueId: Math.floor(Math.random() * 200),
      imageUri: imageUpload,
      audioFiles: audioRecordings,
    };
    if (note !== '' && title !== '' && flag === false && !pin) {
      dispatch(addNotes(noteData));
    } else if (note !== '' && title !== '' && flag === false && pin) {
      dispatch(pinNotes(noteData));
    } else if (flag && !pin) {
      dispatch(
        editNotes({
          id,
          item: {
            ...noteData,
          },
        }),
      );
    }
    navigation.goBack();
  };

  const handleTitle = (text: any) => {
    setTitle(text);
  };

  const handleNote = (text: any) => {
    setNote(text);
  };
  //triggers when the audio player button is pressed
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
            source={{uri: image}}
            style={{
              height: (SCREEN_HEIGHT * 0.3) / imageCount,
              width: (SCREEN_WIDTH * 0.7) / imageCount,
              resizeMode: 'contain',
            }}
          />
        </View>
      );
    });
  };
  const renderItem = () => {
    return <View style={styles.flexrap}>{renderImage()}</View>;
  };
  const deleteOperation = () => {
    if (flag) dispatch(deleteNotes(id));
    navigation.goBack();
  };

  const handleCanvasPress = () => {
    setShowCanvas(true);
  };
  const handlePin = () => {
    setPin(true);
  };

  const handleSpeech = () => {
    if (isListening) {
      SpeechToTextService.stopListening();
      setIsListening(false);
    } else {
      SpeechToTextService.checkAvailabilityAndPermissions().then(
        (availability: any) => {
          if (availability) {
            SpeechToTextService.startListening(
              transcript => {
                setNote(prevState => prevState + ' ' + transcript);
              },
              error => {
                console.log('Speech recognition error:', error);
              },
            );
            setIsListening(true);
          } else {
            console.log('Permissions or availability check failed');
          }
        },
      );
    }
  };
  return (
    <>
      <Header onPress={handlePress} handlePin={handlePin} />
      <SafeAreaView style={{flex: 1, backgroundColor: selectedColor}}>
        <ScrollView style={{flex: 1}}>
          <View style={[styles.container, {backgroundColor: selectedColor}]}>
            <View style={{flex: 1}}>
              {renderAudioRecordings()}
              {renderItem()}
            </View>
            <TextInput
              autoCapitalize="words"
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="dark"
              maxLength={40}
              placeholderTextColor={'black'}
              placeholder="Title"
              style={styles.title}
              value={title}
              onChangeText={text => handleTitle(text)}
            />
            <TextInput
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="dark"
              multiline={true}
              placeholderTextColor={'black'}
              placeholder="Note"
              style={styles.note}
              cursorColor={'white'}
              value={note}
              onChangeText={text => handleNote(text)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      {showCanvas && (
        <CanvasDrawing
          onSave={handleCanvasSave}
          onClose={() => setShowCanvas(false)}
        />
      )}
      <TouchableOpacity style={styles.speechButton} onPress={handleSpeech}>
        {isListening ? (
          <Image style={styles.audioWave} source={icons.gif} />
        ) : (
          <Text style={styles.speechText}>Speak to Text</Text>
        )}
      </TouchableOpacity>
      <NotesFooter
        handleCanvasPress={handleCanvasPress}
        onShare={onShare}
        onColorOptionPress={(color: string) => {
          setSelectedColor(color);
          setColor(true);
        }}
        deleteOperation={deleteOperation}
        imageUploadPress={(uri: string) => {
          const newArr = [...imageUpload, uri];
          setImageUpload(newArr);
        }}
        handleAudioPress={handleAudioPress}
        isRecording={isRecording}
        handleSpeech={handleSpeech}
      />
    </>
  );
};

export default NotesScreen;
