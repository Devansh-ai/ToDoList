import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import BottomBar from '../../components/bottomBar';
import AddButton from '../../components/addButton';
import HomeHeader from '../../components/homeHeader';
import Card from '../../components/card';
import { addNotes, deleteNotes } from '../../Redux/config/configSlice';
import { colors } from '../../utils/color';




interface Item {
  title: string;
  note: string;
}
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { item } = useSelector((store: any) => store.configSlice);
  const dispatch = useDispatch();
  const inset = useSafeAreaInsets();
  const [view, setView] = useState(1);
  const bgcColor:any=["#EB9DA2","#F0B884","#E8E6A5","#BBE8B5","ACBBE8","C5ACE8"]

  // dispatch(addNotes({ title:"Welcome to the notes App", note:"Here you  can add notes as per your requirement" }))
  // dispatch(addNotes({ title:"Welcome to the notes App", note:"Here you  can add notes as per your requirement" }))
  // dispatch(addNotes({ title:"Welcome to the notes App", note:"Here you  can add notes as per your requirement" }))

    // console.log("first",item)
  const handlePress = () => {
    navigation.navigate('NotesScreen',
    );
  };
  const onSearchPress=()=>{
    navigation.navigate('SearchScreen');
  }
  
  const onCardPress = (index: any, items: any) => {
    // console.log("???????????????",item[index])
    const id=item[index].uniqueId
    navigation.navigate('NotesScreen', { id: id, items: items, flag: true });
  };

  const handleView = () => {
    setView(view===2?1:2);
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

        <View style={[styles.rowFront,{width:SCREEN_WIDTH/view
}]}>
          <Card text1={data.item.title} text2={data.item.note} bgColor={ data.item.bgColor} />
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
    // console.log("first")
  }

  return (
    <View style={[styles.main, { paddingTop: inset.top + 10, flex: 1 }]}>
      <HomeHeader onPress={handleView} view={view}
        onPressDrawer={onPressDrawer}
        onSearchPress={onSearchPress}
      />
      <View
       style={{ marginTop:20 }} 
       />
        {/* {view?(  */}
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
  closeOnRowPress={true}        // Closes row on pressing the main item
  disableLeftSwipe={false}      // Enable left swipe if you want
  swipeToOpenPercent={30}       // Row will open only after swiping 30% of its width
  stopLeftSwipe={-75}           // Limits how far the row can be swiped
  closeOnRowBeginSwipe={true}   // Closes other rows when a row begins swipe
  previewOpenDelay={0}          // Remove the preview delay
  // previewRowKey={null}          // Remove the preview functionality
  previewOpenValue={0}          // Remove the preview open value
  swipeToClosePercent={30}      // Row will close when swiped back 30%
  recalculateHiddenLayout={true} // Ensures hidden item layout is correct
/>
      
      {/* ):(
        <SwipeListView
        data={item}
      disableRightSwipe
      numColumns={2}
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
      )} */}
      {/* <SwipeListView
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
      /> */}
      {/* <BottomBar /> */}
      <AddButton onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor:colors.mainBg,
    flex: 1,
  },
  rowFront: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // height: 'auto',
    // padding:1,
      height:SCREEN_HEIGHT*0.09

  
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    height:SCREEN_HEIGHT*0.09

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