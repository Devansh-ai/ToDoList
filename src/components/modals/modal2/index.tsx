import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import { modal2 } from '../../../utils/Strings';
import { icons } from '../../../assets';
import { colors } from '../../../utils/color';
import { styles } from './styles';

const OptionsModal = ({ visible, ondismiss, deleteOperation }: { visible: any, ondismiss: any, deleteOperation: any }) => {
    const toggleModal = () => {
        ondismiss()
    };
    const handleDelete = () => {
        deleteOperation();
        toggleModal();
    };
    const handleOpenLink = () => {
        const url = 'https://support.google.com/keep/?hl=en#topic=6262468';
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
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

                            <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                                <Image
                                    source={icons.delete}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}

                                />
                                <Text style={styles.modalButtonText}>
                                    {modal2.delete}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image
                                    source={icons.copy}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}
                                />
                                <Text style={styles.modalButtonText}>
                                    {modal2.copy}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image
                                    source={icons.send}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}

                                />
                                <Text style={styles.modalButtonText}>
                                    {modal2.send}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image
                                    source={icons.collab}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}
                                />
                                <Text style={styles.modalButtonTextDelete}>
                                    {modal2.collab}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image
                                    source={icons.label}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}
                                />
                                <Text style={styles.modalButtonTextDelete}>
                                    {modal2.label}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleOpenLink}>
                                <Image
                                    source={icons.help}
                                    style={styles.buttonIcon}
                                    tintColor={colors.secondaryBg}
                                />
                                <Text style={styles.modalButtonTextDelete}>
                                    {modal2.help}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default OptionsModal;


