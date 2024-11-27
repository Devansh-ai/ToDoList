import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/homeScreen';
import NotesScreen from '../../screens/notesScreen';
import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer{...props} />}
      screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}