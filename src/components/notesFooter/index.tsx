import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../assets'
import { notesFooter } from '../../utils/Strings'
import UploadModal from '../modals/UploadModal'
import OptionsModal from '../modals/OptionsModal'
import RBSheet from 'react-native-raw-bottom-sheet';
import Colors from '../Colors'
import { colors } from '../../utils/color'

const NotesFooter = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalOpVisible, setIsModalOpVisible] = useState(false)
    const refRBSheet = useRef<any>();

    const handleMoreOption = () => {
        refRBSheet.current.open();
    };
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }
    const toggleModalOp = () => {
        setIsModalOpVisible(!isModalOpVisible);
    }
    return (
        <View style={styles.containerHead}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                    <Image
                        source={icons.add1}
                        tintColor={colors.secondaryBg}

                        style={styles.addIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMoreOption}>
                    <Image
                        source={icons.palette}
                        tintColor={colors.secondaryBg}
                        style={styles.addIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>
                    {notesFooter.lastEdit}
                </Text>

                <TouchableOpacity onPress={toggleModalOp}>
                    <Image
                        source={icons.dots3}
                        tintColor={colors.secondaryBg}
                        style={styles.dotIcon}
                    />
                </TouchableOpacity>
                <OptionsModal
                    visible={isModalOpVisible}
                    ondismiss={toggleModalOp}
                />
                <RBSheet
                    ref={refRBSheet}
                    closeOnPressMask
                    useNativeDriver={false}
                    draggable={true}
                    height={Dimensions.get('window').height / 6}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        },
                        draggableIcon: {
                            backgroundColor: colors.secondaryBg,
                            width: '12%',
                        },
                        container: {
                            borderRadius: 20,
                            backgroundColor: '#f2f2f2',
                        },
                    }}

                >

                    <Colors onColorOptionPress={(item: any, index: any) => {
                        props?.onColorOptionPress(item)
                    }} />
                </RBSheet>
                <UploadModal
                    imageUploadPress={(uri: any) => {
                        props?.imageUploadPress(uri)
                    }}
                    visible={isModalVisible}
                    ondismiss={toggleModal}
                />
            </View>
        </View>
    )
}

export default NotesFooter

