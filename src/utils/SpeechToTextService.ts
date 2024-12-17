import Voice from '@react-native-voice/voice';
import {Alert, Linking, Platform} from 'react-native';
import {
  request,
  PERMISSIONS,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

type SpeechRecognitionCallback = (text: string) => void;
let stopTimeout: string | number | NodeJS.Timeout | undefined;

const SpeechToTextService = {
  checkAvailabilityAndPermissions: async () => {
    if (!Voice) {
      console.error('Voice recognition is not available.');
      return false;
    } else if (Platform.OS === 'android') {
      return request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(res => {
        switch (res) {
          case 'granted':
            return true;
          case 'denied':
            Alert.alert(
              'Microphone permission',
              'Microphone permission is denied in the device settings. Allow the app to access the microphone to use voice recognition.',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
            return false;
          case 'blocked':
            Alert.alert(
              'Microphone permission',
              'Microphone permission is blocked in the device settings. Please allow the app to access the microphone by going to settings.',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
            return false;
          default:
            return false;
        }
      });
    } else if (Platform.OS === 'ios') {
      return request(PERMISSIONS.IOS.MICROPHONE).then(res => {
        switch (res) {
          case 'granted':
            return true;
          case 'denied':
            Alert.alert(
              'Microphone permission',
              'Microphone permission is denied in the device settings. Allow the app to access the microphone to use voice recognition.',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
            return false;
          case 'blocked':
            Alert.alert(
              'Microphone permission',
              'Microphone permission is blocked in the device settings. Please allow the app to access the microphone by going to settings.',
              [
                {
                  text: 'Cancel',
                  onPress: () => null,
                  style: 'cancel',
                },
                {
                  text: 'Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
            return false;
          default:
            return false;
        }
      });
    } else {
      return true;
    }
  },

  startListening: async (
    onTextRecognized: SpeechRecognitionCallback,
    isListening: (arg0: boolean) => void,
  ) => {
    try {
      let partialTranscript = ''; 

      Voice.onSpeechResults = (event: any) => {
        console.log('result of speech', event);

        const transcript = event.value[0];
        partialTranscript = transcript;
        console.log('Partial transcript:', partialTranscript);
      };

      Voice.onSpeechStart = () => {
        try {
          console.log('Speech started');
          isListening(true); 
        } catch (error) {
          console.log('error of speech started', error);
        }
      };

      Voice.onSpeechEnd = async () => {
        console.log('Speech ended');
        isListening(false); 
        onTextRecognized(partialTranscript);
        console.log('Final transcript:', partialTranscript);
      };      
      await Voice.start('en-GB');
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  },

  startStopTimeout: () => {
    stopTimeout = setTimeout(() => {
      SpeechToTextService.stopListening();
    }, 5000);
  },

  clearStopTimeout: () => {
    if (stopTimeout) {
      clearTimeout(stopTimeout);
      stopTimeout = undefined;
    }
  },

  stopListening: async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  },

  onSpeechEnd: async (speachEnded: () => void) => {},

  removeSpeechListeners: () => {
    Voice.removeAllListeners();
  },
};

export default SpeechToTextService;
