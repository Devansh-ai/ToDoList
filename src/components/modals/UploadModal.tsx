import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { modal1 } from '../../utils/Strings';
import { icons } from '../../assets';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/color';




const UploadModal = ({ visible, ondismiss,imageUploadPress}: {imageUploadPress:any, visible: any, ondismiss: any }) => {
    const navigation=useNavigation();
    const [imageUri, setImageUri] = useState<string | null>('');
    const [audioUri,setAudioUri]=useState<string | null >('');
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
            console.log("res.uri",res);
            return res;
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled document picker');
            } else {
                throw err;
            }
        }
    }
    // useEffect (()=>{
    //     console.log("first");
    // },[imageUri,audioUri])
    
    const openGallery = () => {
        // toggleModal();
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
            if (response.assets && response.assets[0]) {
                console.log(imageUri, "imageuri")
                imageUploadPress(response.assets[0].uri ?? '')
                setImageUri(response.assets[0].uri ?? '');
            }
        });

    };

    const handleTakePhoto = () => {
        console.log('launch camerafghjkjhgfgjikjhghj');
        launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
            console.log('launch camera');

            if (response.assets && response.assets[0]) {
                setImageUri(response.assets[0].uri ?? '')
               // console.log(imageUri, "image uri")

            }
        });
        toggleModal();
    };

    const handleSelectedAudio = async () => {
        console.log("first")
        const audioUri = await selectAudioFile();
        if (audioUri)
            console.log(audioUri, "audioUri")
        // PlayAudio(audioUri);
        // audioUploadPress(audioUri);
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




                            <TouchableOpacity style={styles.modalButton} 
                            // onPress={navigation.navigate('Canvas')}
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
                                onPress={handleSelectedAudio}>
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
        borderRadius:20,
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
