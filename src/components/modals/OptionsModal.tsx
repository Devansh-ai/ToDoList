import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import { modal2 } from '../../utils/Strings';
import { icons } from '../../assets';
import { colors } from '../../utils/color';




const OptionsModal = ({ visible, ondismiss, deleteOperation }: { visible: any, ondismiss: any, deleteOperation: any }) => {
    const [isModalVisible, setisModalVisible] = useState<boolean>(visible)
    const toggleModal = () => {
        ondismiss()
    };
    const handleDelete = () => {
        deleteOperation(); // Call the delete operation
        setisModalVisible(false); // Close the modal after delete operation
        toggleModal(); // Optionally call this to close the modal as well
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

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    modalContent: {
        backgroundColor: colors.theme,
        borderRadius: 12,
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
