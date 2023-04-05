import React, { useEffect, useState } from 'react';
// import DeviceInfo from 'react-native-device-info';
// import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector } from 'react-redux';
// import { authSelector } from '../store/slices/authSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux
// import { useAppDispatch, useAppSelector } from '../store/store';
// import { signIn } from '../store/slices/authSlice';

import mainRoute from './mainRouter';
// import authRoute from './authRouter';

const Navigator = () => {
   // const dispatch = useAppDispatch();
   const Stack = createNativeStackNavigator();
   // const { isLogin, username, userToken } = useSelector(authSelector);
   // const [isLoading, setisLoading] = useState(true);

   // console.log("userToken: ", userToken)

   const MainNavigator = () => {
      // const screenList = isLogin ? mainRoute : authRoute;
      const screenList = mainRoute;
      return (
         // <Stack.Navigator initialRouteName={isLogin ? 'Home' : 'Login'}>
         <Stack.Navigator initialRouteName={'Home'}>
            {screenList.map(item => <Stack.Screen key={item.name} name={item.name} component={item.component} options={item.option} />)}
         </Stack.Navigator>
      )
   }

   // const checkUserToken = async () => {
   //    const checkLoginToken = await Keychain.getGenericPassword();
   //    const getUserData = JSON.parse(await AsyncStorage.getItem("userData"));
   //    const loginStatus = JSON.parse(await AsyncStorage.getItem("loginStatus"));
   //    const model = DeviceInfo.getModel();

   //    if (checkLoginToken && loginStatus.isLogin) {
   //       dispatch(signIn({
   //          userToken: checkLoginToken.username,
   //          username: getUserData.username,
   //          deviceModel: model,
   //          singleRole: getUserData.singlerole
   //       }));
   //    }
   //    setisLoading(false);
   // }

   // useEffect(() => {
   //    checkUserToken();
   // }, [username, userToken])


   return (
      <NavigationContainer>
         {/* {!isLoading && <MainNavigator />} */}
         <MainNavigator />
      </NavigationContainer>
   )
}

export default Navigator