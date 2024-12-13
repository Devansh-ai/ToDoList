import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../../components/addButton';
import HomeHeader from '../../components/homeHeader';
import Card from '../../components/card';
import { deleteNotes } from '../../Redux/config/configSlice';
import { styles } from './styles';

/**
 * this screen renders all the notes as card as saved by the user
 */
const SCREEN_WIDTH = Dimensions.get('screen').width;
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { item } = useSelector((store: any) => store.configSlice);
  const dispatch = useDispatch();
  const inset = useSafeAreaInsets();
  const [view, setView] = useState(1);

  const handlePress = () => {
    navigation.navigate('NotesScreen',
    );
  };

  const onSearchPress = () => {
    navigation.navigate('SearchScreen');
  }

  const onCardPress = (index: any, items: any) => {
    const id = item[index].uniqueId
    navigation.navigate('NotesScreen', { id: id, items: items, flag: true });
  };

  const handleView = () => {
    setView(view === 2 ? 1 : 2);
  };

  const deleteItem = (cardIndex: any) => {
    dispatch(deleteNotes(cardIndex));
  };

  const renderItem = (data: any) => {
    return (
      <TouchableOpacity
        onPress={() => onCardPress(data.index, data.item)}
      >

        <View style={[styles.rowFront, {
          width: SCREEN_WIDTH / view
        }]}>
          <Card text1={data.item.title} text2={data.item.note} bgColor={data.item.bgColor} />
        </View>
      </TouchableOpacity>
    )
  };

  const renderHiddenItem = (data: any) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={styles.backRightBtn}
          onPress={() => deleteItem(data.item.uniqueId)}
        >
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const onPressDrawer = () => {
    navigation.openDrawer();
  }

  return (
    <View style={[styles.main, { paddingTop: inset.top + 10, flex: 1 }]}>
      <HomeHeader onPress={handleView} view={view}
        onPressDrawer={onPressDrawer}
        onSearchPress={onSearchPress}
      />
      <View
        style={{ marginTop: 20 }}
      />
      <SwipeListView
        data={item}
        disableRightSwipe
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        leftOpenValue={0}
        key={view}
        keyExtractor={(item, index) => index.toString()}
        numColumns={view}
        closeOnRowPress={true}
        disableLeftSwipe={false}
        swipeToOpenPercent={30}
        stopLeftSwipe={-75}
        closeOnRowBeginSwipe={true}
        previewOpenDelay={0}
        previewOpenValue={0}
        swipeToClosePercent={30}
        recalculateHiddenLayout={true}
      />
      <AddButton onPress={handlePress} />
    </View>
  );
};



export default HomeScreen;