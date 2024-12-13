import { Text, View, Modal, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { modal1 } from '../../../utils/Strings';
import { icons } from '../../../assets';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { colors } from '../../../utils/color';
import { styles } from './styles';

const UploadModal = ({ visible, ondismiss, imageUploadPress, handleCanvasPress }: { handleCanvasPress: any, imageUploadPress: any, visible: any, ondismiss: any }) => {
    const [imageUri, setImageUri] = useState<string | null>('');
    const toggleModal = () => {
        ondismiss()
    };
    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
            if (response.assets && response.assets[0]) {
                console.log(imageUri, "imageuri")
                imageUploadPress(response.assets[0].uri ?? '')
                setImageUri(response.assets[0].uri ?? '');
                toggleModal()
            }
        });

    };
    const onCanvasPress = () => {
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
                        </View>


                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default UploadModal;


