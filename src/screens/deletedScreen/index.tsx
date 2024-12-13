import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card';
import { styles } from './styles';
import { recoverNotes } from '../../Redux/config/configSlice';
import { deleted } from '../../utils/Strings';

/**
 * this screen shows all the deleted items from the homescreen
 */
const SCREEN_WIDTH = Dimensions.get('screen').width;
const DeletedScreen = ({ navigation }: { navigation: any }) => {
  const deletedItems = useSelector((store: any) => store.configSlice);
  const dispatch = useDispatch();
  const inset = useSafeAreaInsets();
  const [view, setView] = useState(1);

  const handleView = () => {
    setView(view === 2 ? 1 : 2);
  };

  const recoverItem = (cardIndex: number) => {
    Alert.alert(
      "Recover Note",
      "Are you sure you want to recover this note?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Recover",
          onPress: () => dispatch(recoverNotes(cardIndex))
        }
      ]
    );
  };

  const renderItem = (data: any) => {
    return (
      <View style={[styles.rowFront, { width: SCREEN_WIDTH / view }]}>
        <Card
          text1={data.item.title}
          text2={data.item.note}
          bgColor={data.item.bgColor}
        />
      </View>
    );
  };

  const renderHiddenItem = (data: any) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, { backgroundColor: '#4CAF50' }]}
          onPress={() => recoverItem(data.index)}
        >
          <Text style={styles.backTextWhite}>Recover</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >

        </TouchableOpacity>

        <Text style={styles.headerTitle}>{deleted.head}</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleView}
        >

        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.main, { paddingTop: inset.top }]}>
      {renderHeader()}
      <View style={{ marginTop: 20 }} />
      {Object.keys(deletedItems.deletedItem).length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{deleted.nothing}</Text>
        </View>
      ) : (
        <SwipeListView
          data={deletedItems.deletedItem}
          disableRightSwipe
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-110}
          leftOpenValue={0}
          key={view}
          keyExtractor={(item, index) => index.toString()}
          numColumns={view}
          closeOnRowPress={true}
          disableLeftSwipe={false}
          swipeToOpenPercent={30}
          stopLeftSwipe={-110}
          closeOnRowBeginSwipe={true}
          previewOpenDelay={0}
          previewOpenValue={0}
          swipeToClosePercent={30}
          recalculateHiddenLayout={true}
        />
      )}
    </View>
  );
};



export default DeletedScreen;