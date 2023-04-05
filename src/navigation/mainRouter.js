import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './drawerContent';

import HomeScreen from '../screens/homeScreen';

const HomeDrawer = () => {
   const Drawer = createDrawerNavigator();
   return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} >
         <Drawer.Screen name="HomeDrawer" component={HomeScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
   )
}

const mainRoute = [
   {
      name: "Home",
      component: HomeDrawer,
      option: { title: "หน้าหลัก", headerShown: false }
   },
]

export default mainRoute