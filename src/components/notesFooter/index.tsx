import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../assets'
import { notesFooter } from '../../utils/Strings'
import RBSheet from 'react-native-raw-bottom-sheet';
import Colors from '../Colors'
import { colors } from '../../utils/color'
import UploadModal from '../modals/modal1'
import OptionsModal from '../modals/modal2'

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
                <TouchableOpacity onPress={toggleModal}>
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
                <TouchableOpacity
                    onPress={props?.handleAudioPress}
                    style={styles.audioButton}
                >
                    <Image
                        source={props.isRecording ? icons.stop : icons.micAudio}
                        tintColor={colors.secondaryBg}
                        style={styles.audioIcon}
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
                    deleteOperation={props.deleteOperation}
                    visible={isModalOpVisible}
                    ondismiss={toggleModalOp}
                    onShare={props?.onShare}
                    handleSpeech={props?.handleSpeech}
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
                    handleCanvasPress={props?.handleCanvasPress}
                />
            </View>
        </View>
    )
}

export default NotesFooter;
