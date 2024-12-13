import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/homeScreen';
import CustomDrawer from './customDrawer';
import DeletedScreen from '../../screens/deletedScreen';

//this is the main side drawer

export function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer{...props} />}
      screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="DeletedScreen" component={DeletedScreen} />
    </Drawer.Navigator>
  );
}