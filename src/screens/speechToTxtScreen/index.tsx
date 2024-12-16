import { ActivityIndicator, PermissionsAndroid, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Voice from '@react-native-voice/voice';
import { colors } from '../../utils/color';

const SpeechToTxtScreen = ({ navigation }: { navigation: any }) => {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = stopListening;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechError = (error: any) => console.log("onSpeechError", error);

        const androidPermissionChecking = async () => {
            if (Platform.OS === 'android') {
                const hasPermission = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                )
            }
        }
        androidPermissionChecking();

        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, [])
    const onSpeechStart = (event: any) => {
        console.log("recording started", event)

    };
    const startListening = async () => {
        setIsRecording(true);
        try {
            await Voice.start('en-US');

        } catch (error) {
            console.log("error in starting recording", error)
        }
    }

    const onSpeechResults = (event: any) => {
        console.log("speech results are", event)
        const text = event.value[0];
        setResult(text)

    }
    const stopListening = async () => {
        try {
            Voice.removeAllListeners();
            await Voice.stop();
            setIsRecording(false)
        } catch (error) {
            console.log("error in stopping listening", error)
        }
    }
    const onSpeechEnd = () => {

    };
    // const requestPermissions = async () => {
    // //     const availableLanguages = await Voice.getAvailableLanguages();
    // //   console.log(availableLanguages);
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    //         {
    //           title: 'Audio Permission',
    //           message: 'This app needs access to your microphone to record speech.',
    //           buttonNeutral: 'Ask Me Later',
    //           buttonNegative: 'Cancel',
    //           buttonPositive: 'OK',
    //         }
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         console.log('Audio permission granted');
    //       } else {
    //         console.log('Audio permission denied');
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   };

    // useEffect(() => {
    //     requestPermissions();
    //     function onSpeechStart(e) {
    //         setIsRecording(true);
    //     }
    //     function onSpeechEnd() {
    //         setIsRecording(false);
    //         setLoading(false);
    //     }
    //     function onSpeechResults(e) {
    //         if (e.value && e.value[0]) {
    //             setResult(e.value[0]);
    //         }
    //     }
    //     function onSpeechError() {
    //         setIsRecording(false);
    //         setLoading(false);
    //     }

    //     Voice.onSpeechStart = onSpeechStart;
    //     Voice.onSpeechEnd = onSpeechEnd;
    //     Voice.onSpeechResults = onSpeechResults;
    //     Voice.onSpeechError = onSpeechError;

    //     return () => {
    //         Voice.destroy().then(() => {
    //             Voice.removeAllListeners();
    //         });
    //     };
    // }, []);

    // const startRecording =  () => {

    //     setLoading(true);
    //     try {
    //         // await Voice.destroy();
    //         //await Voice.start('en-US');
    //         Voice.start('en-US')
    //     } catch (e) {
    //         console.log(e,'error in start');
    //         setLoading(false);
    //         setIsRecording(false);
    //     }
    // };

    // const stopRecording =  () => {
    //     try {
    //         console.log("stop clicked")

    //         ///wait Voice.stop();
    //          Voice.stop();
    //     } catch (e) {

    //         console.log(e,'error in stop');

    //     }
    //     setIsRecording(false);
    //     setLoading(false);
    //     // console.log(Voice.)
    // };

    const clearText = () => {
        setResult('');
    };
    const handleResult = (text: string) => {
        setResult(text);
        console.log("devansh", text)
    }
    const saveResults = () => {
        navigation.navigate('NotesScreen', { result: result })
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.headingText}>Voice to Text Recognition</Text>
                <View style={styles.textInputStyle}>
                    <TextInput
                        value={result}
                        multiline
                        placeholder="Say something!"
                        style={{
                            flex: 1,
                            height: '100%',
                        }}
                        onChangeText={(text: any) => handleResult(text)}
                    />
                </View>
                <View style={styles.btnContainer}>


                    <TouchableOpacity
                        onPress={() => {
                            isRecording ? stopListening() : startListening()
                        }}
                        style={[styles.start, isRecording && { opacity: 0.5 }]}
                        disabled={isRecording}
                    >
                        <Text style={{ backgroundColor: colors.secondaryBg, color: 'white' }}>
                            record
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.stop, !isRecording && { opacity: 0.5 }]}
                        onPress={stopListening}
                        disabled={!isRecording}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Stop
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.clear}
                    onPress={clearText}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Clear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.save}
                    onPress={saveResults}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

export default SpeechToTxtScreen;