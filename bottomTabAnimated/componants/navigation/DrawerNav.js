import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerCustom from "./drawerCustom/DrawerCustom";
//components
import TabNav  from "./TabNav";


// Drawer
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="HomeD" id="right" drawerContent={(props)=><DrawerCustom {...props}  />} > 
        <Drawer.Screen name="HomeD" component={TabNav} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNav;
