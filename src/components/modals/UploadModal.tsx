import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { modal1 } from '../../utils/Strings';
import { icons } from '../../assets';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/color';
import AudioRecorderPlayer, {
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    AVModeIOSOption,
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
} from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import SoundPlayer from 'react-native-sound-player';



const UploadModal = ({ visible, ondismiss, imageUploadPress,handleCanvasPress }: { handleCanvasPress:any,imageUploadPress: any, visible: any, ondismiss: any }) => {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState<string | null>('');
    const [audioUri, setAudioUri] = useState<string | null>('');
    const [isRecording, setIsRecording] = useState(false);
    const [audioPath, setAudioPath] = useState('');
    const [audio, setAudio] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRecorderPlayer = new AudioRecorderPlayer();

    useEffect(()=>{
        console.log(audio, "<<<<<");
    },[audio])

    const generateAudioName = () => {
        let num: any = (Math.floor(Math.random() * 100))
        let fileName: string = "devansh".concat(num);
        // console.log("name",fileName)
        return fileName;
    };
    const startRecording = async () => {
        const path = `${generateAudioName()}.aac`;
        console.log("first", path)
        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVModeIOS: AVModeIOSOption.measurement,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        // console.log("first",audioSet)
        const meteringEnabled = false;
        // await setCountdown(0);
        // await setSeconds(0);
        // await setMinutes(0);
        // setStartCountdown(true);

      const onStopRecord = async () => {
        
            const result = await audioRecorderPlayer.stopRecorder();
            audioRecorderPlayer.removeRecordBackListener();
            setAudio({
              recordSecs: 0,
            });
            console.log(result);
          };

       const  onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
           audioRecorderPlayer.addRecordBackListener((e) => {
             setAudio({
                recordSecs: e.currentPosition,
                recordTime:audioRecorderPlayer.mmssss(
                  Math.floor(e.currentPosition),
                ),
              });
              return;
            });
            console.log(result, "<<<<<<<<<<<");
          };
          

        try {
            onStartRecord()
           
            
        } catch (error) {
            console.error("1", error);
        }
    };

    const stopRecording = async () => {
        try {
            const result = await audioRecorderPlayer.stopRecorder();
            setIsRecording(false);
            console.log('Uri at', result);
        } catch (error) {
            console.error("2", error);
        }
    };

    const toggleModal = () => {
        ondismiss()
    };

    async function selectAudioFile() {
        try {
            console.log("try ")
            const res: any = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],
            });
            console.log('Selected audio file:', res);
            setAudioUri(res);
            console.log("res.uri", res);
            return res;
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled document picker');
            } else {
                throw err;
            }
        }
    }
    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
            if (response.assets && response.assets[0]) {
                console.log(imageUri, "imageuri")
                imageUploadPress(response.assets[0].uri ?? '')
                setImageUri(response.assets[0].uri ?? '');
            }
        });

    };
    const onCanvasPress=()=>{
        handleCanvasPress();
        toggleModal();
    }

    const handleTakePhoto = () => {
        console.log('launch camera');
        launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
            console.log('launch camera');

            if (response.assets && response.assets[0]) {
                setImageUri(response.assets[0].uri ?? '')
            }
        });
        toggleModal();
    };

    const handleSelectedAudio = async () => {
        console.log("first")
        const audioUri = await selectAudioFile();
        if (audioUri)
            console.log(audioUri, "audioUri")
        toggleModal();

    };

    return (
        <View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}


            >
                <Pressable onPress={toggleModal} style={styles.container} >


                    <View style={styles.modalContent}>
                        <View style={styles.modalContainer}>
                            {
                                (<TouchableOpacity style={styles.modalButton}
                                    onPress={handleTakePhoto}
                                >
                                    <Image
                                        source={icons.photo}
                                        style={styles.buttonIcon}
                                        tintColor={colors.secondaryBg}

                                    />
                                    <Text style={styles.modalButtonText}>
                                        {modal1.photo}
                                    </Text>
                                </TouchableOpacity>
                                )
                            }




                            <TouchableOpacity style={styles.modalButton}
                                onPress={openGallery}
                            >
                                <Image
                                    source={icons.image}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}

                                />
                                <Text style={styles.modalButtonText}>
                                    {modal1.image}
                                </Text>
                            </TouchableOpacity>




                            <TouchableOpacity style={styles.modalButton} onPress={onCanvasPress}
                            >
                                <Image
                                    source={icons.draw}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}

                                />
                                <Text style={styles.modalButtonText}>
                                    {modal1.draw}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}
                                onPress={isRecording ? stopRecording : startRecording}>
                                <Image
                                    source={icons.mic}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}

                                />
                                <Text style={styles.modalButtonTextDelete}>
                                    {modal1.rec}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image
                                    source={icons.tick}
                                    style={styles.buttonIcon}

                                    tintColor={colors.secondaryBg}


                                />
                                <Text style={styles.modalButtonTextDelete}>
                                    {modal1.tick}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default UploadModal;

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 10,
        marginBottom: 20,

    },
    modalContent: {
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
    },
    buttonIcon: {
        height: 25,
        width: 25,
    },
    modalButtonText: {
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 8,
        color: colors.secondaryBg,
    },
    modalButton: {
        flexDirection: 'row',
        padding: 30,
    },
    modalButtonTextDelete:
    {
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 8,
        color: colors.secondaryBg,
    },

})
