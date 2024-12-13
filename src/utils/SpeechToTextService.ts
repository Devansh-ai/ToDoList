import Voice from '@react-native-voice/voice';
import { Alert, Linking, Platform } from 'react-native';
import {
  request,
  PERMISSIONS,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

type SpeechRecognitionCallback = (text: string) => void;
let stopTimeout: string | number | NodeJS.Timeout | undefined;

console.log('chal rha h?')

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
      return true; // Assuming available and permissions granted for other platforms
    }
  },
startListening: async (
    onTextRecognized: SpeechRecognitionCallback,
    isListening: (arg0: boolean) => void,
  ) => {
    try {
      Voice.onSpeechResults = (event: any) => {
        console.log('result of speech', event);
        const transcript = event.value[0];
        onTextRecognized(transcript);
        console.log("transcript",transcript)
        // clearTimeout(stopTimeout);
        // SpeechToTextService.startStopTimeout();
      };

      Voice.onSpeechStart = () => {
        try {
          console.log('Speech started');
          isListening(true);
          // You can set a state here to track speech status if needed
        } catch (error) {
          console.log('error of speech started', error);
        }
      };

      Voice.onSpeechEnd = async () => {
        console.log('ye end');
        isListening(false);
        // Voice.removeAllListeners();
        // SpeechToTextService?.removeSpeechListeners();
        // SpeechToTextService.clearStopTimeout(); // Clear the timeout when speech ends

        // You can set a state here to track speech status if needed
      };

      await Voice.start('en-GB');
      // SpeechToTextService.startStopTimeout();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  },

  startStopTimeout: () => {
    stopTimeout = setTimeout(() => {
      SpeechToTextService.stopListening();
    }, 5000); // Adjust this timeout value as needed (e.g., 5 seconds here)
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

export default SpeechToTextService
