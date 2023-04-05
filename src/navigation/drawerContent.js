import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { appVersion } from '../utils/appConfig';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { textStyle, colors, mainStyle } from '../styles';

// Redux
// import { useAppDispatch, useAppSelector } from '../store/store';
// import { logoutAction, authSelector } from '../store/slices/authSlice';

const CustomDrawerContent = (props) => {
   const navigation = useNavigation();
   // const dispatch = useAppDispatch();
   // const { username } = useAppSelector(authSelector);
   const [name, setname] = useState("");
   const [userImage, setuserImage] = useState(null);
   const [email, setemail] = useState(null);
   const [telephone, settelephone] = useState(null);

   // const getUserData = async () => {
   //    const userData = JSON.parse(await AsyncStorage.getItem("userData"));
   //    if (userData) {
   //       setname(`${userData.firstName} ${userData.lastName}`);
   //       setuserImage(userData.userImage);
   //    }
   // }

   // useEffect(() => {
   //    getUserData();
   // }, [])


   return (
      <View style={{ backgroundColor: "#ccc", flex: 1 }}>
         <Pressable onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <Icons name='close' size={28} color="#FFFFFF" />
         </Pressable>
         <DrawerContentScrollView {...props} >
            {/* <View style={{ paddingHorizontal: 15, paddingTop: 30, FFFFFF: 15, marginBottom: 15, }}>
               <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#ffbeb3", paddingBottom: 25, alignItems: "center" }}>
                  <FastImage
                     source={
                        userImage == null
                           ? require("../assets/icons/sample-user-icon.png")
                           : { uri: userImage }
                     }
                     style={{ width: 80, height: 80, borderRadius: 50, marginBottom: 10 }}
                     resizeMode={FastImage.resizeMode.contain}
                  />
                  <Text style={[textStyle.bold22, { color: "#FFFFFF" }]}>{name}</Text>
               </View>
            </View>
            <DrawerItem
               label="Profile"
               labelStyle={[textStyle.bold14, { color: "#FFFFFF", marginLeft: -15 }]}
               onPress={() => navigation.navigate('UserProfile', {
                  name: name,
                  userImage: userImage,
                  email: email,
                  telephone: telephone
               })}
               icon={() => <Icons name='account' size={26} color="#FFFFFF" />}
            />
            <DrawerItem
               label="Logout"
               labelStyle={[textStyle.bold14, { color: "#FFFFFF", marginLeft: -15 }]}
               onPress={() => dispatch(logoutAction())}
               icon={() => <Icons name='logout' size={26} color="#FFFFFF" />}
            /> */}
            <DrawerItem
               label="test"
               labelStyle={{ color: "#FFFFFF", marginLeft: -15 }}
            />
         </DrawerContentScrollView >
         <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Text style={{ color: "#FFFFFF" }}>test</Text>
         </View>
      </View>
   );
}

export default CustomDrawerContent;