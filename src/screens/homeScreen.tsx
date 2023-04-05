import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import { colors, mainStyle, textStyle } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
   navigation: any,
}

const HomeScreen = ({ navigation }: Props) => {

   return (
      <SafeAreaView style={mainStyle.screen}>
         <ScrollView>
            <View style={[mainStyle.container, { alignItems: "center" }]}>
               <Pressable onPress={() => navigation.openDrawer()} style={pageStyle.settingIcon}>
                  <Ionicons name="menu-sharp" size={26} color={"#000"} />
               </Pressable>
               <Text style={[textStyle.bold22, { marginBottom: 30 }]}> โครงการ...</Text>
            </View>
            <View>
               <Text>HomeScreen</Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

export default HomeScreen

const pageStyle = StyleSheet.create({
   settingIcon: {
      position: "absolute",
      left: 15,
      top: 15
   }
})