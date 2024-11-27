import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import BottomBar from '../../components/bottomBar';
import AddButton from '../../components/addButton';
import HomeHeader from '../../components/homeHeader';
import Card from '../../components/card';
import { deleteNotes } from '../../Redux/config/configSlice';




interface Item {
  title: string;
  note: string;
}

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { item } = useSelector((store: any) => store.configSlice);
  const dispatch = useDispatch();
  const inset = useSafeAreaInsets();
  const [view, setView] = useState(false);

  const handlePress = () => {
    navigation.navigate('NotesScreen',
    );
  };

  const onCardPress = (index: any, item: any) => {
    navigation.navigate('NotesScreen', { id: index, items: item, flag: true });
  };

  const handleView = () => {
    setView(!view);
  };

  const deleteItem = (cardIndex: any) => {
    // dispatch({ type: 'DELETE_NOTE', payload: rowKey });
    dispatch(deleteNotes(cardIndex));
  };

  const renderItem = (data: any) => {
    return (
      <TouchableOpacity
        onPress={() => onCardPress(data.index, data.item)}
      >

        <View style={styles.rowFront}>
          <Card text1={data.item.title} text2={data.item.note} />
        </View>
      </TouchableOpacity>
    )
  };

  const renderHiddenItem = (data: any) => {
      // console.log(rowMap,"data")
    return(
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.backRightBtn}
        onPress={() => deleteItem(data.index)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );}
  const onPressDrawer = () => {
navigation.openDrawer();
    console.log("first")
  }
  const onRowOpen=()=>{
    console.log("first")
  }

  return (
    <View style={[styles.main, { paddingTop: inset.top + 10, flex: 1 }]}>
      <HomeHeader onPress={handleView} view={view}
        onPressDrawer={onPressDrawer}
      />
      <View style={{ height: 20 }} />

      <SwipeListView
        data={item}
      disableRightSwipe
        // rightActivationValue={}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        leftOpenValue={0}
        // rightOpenValue={-Dimensions.get('window').width}
          // onSwipeValueChange={onRowOpen}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}

        keyExtractor={(item, index) => index.toString()}
      />
      <BottomBar />
      <AddButton onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  rowFront: {
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 'auto',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: 'red',
    right: 0,
  },

  backTextWhite: {
    color: '#FFF',
  },
});

export default HomeScreen;