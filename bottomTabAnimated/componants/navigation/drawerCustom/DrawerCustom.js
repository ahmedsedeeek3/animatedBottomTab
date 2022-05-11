import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {DrawerContentScrollView,DrawerItemList,useDrawerProgress} from "@react-navigation/drawer"

function DrawerCustom(props) {

   
  return (
    <DrawerContentScrollView {...props}>
        <View>
            <Text>s</Text>
        </View>
    <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default DrawerCustom