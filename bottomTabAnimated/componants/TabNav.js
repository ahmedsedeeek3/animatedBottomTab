import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
//Home
function HomeScreen({navigation}) {

  return (
    <View style={{backgroundColor:"green"}}>
      <Text>Home Screen</Text>
    </View>
  );
}
// setting
function SettingScreen() {
  return (
    <View>
      <Text>setting Screen</Text>
    </View>
  );
}
//account
function AccountScreen() {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
}

//-->>Create NAvigation  ---

const Tabe = createBottomTabNavigator();

function TabNav() {
  return (
    <NavigationContainer>
      <Tabe.Navigator initialRouteName="Setting" screenOptions={(({route})=>({
          tabBarIcon:({focused,size})=>{
            //icone Name  
            let iconeName;
            switch(route.name){
                 case "Home":
                   iconeName = "home"
                   break;
                 case "Setting":
                   iconeName = "setting" 
                   break;
                 case "Account" :
                     iconeName = "slack"  
                     break;
                default:
                    iconeName="exclamationcircleo"
                       
             }
             //switch end
             return <AntDesign name ={iconeName} size={focused?29:20} color={focused?"tomato":"gray"} />
                    
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarAllowFontScaling:true,
          tabBarLabelPosition:"beside-icon",
          tabBarStyle:{borderTopColor:"gray"}
          

      }))}  >
          <Tabe.Screen name="Home" component={HomeScreen} options={{tabBarBadge:"a",tabBarStyle:{}}}/>
          <Tabe.Screen name="Setting" component={SettingScreen}/>
          <Tabe.Screen name="Account" component={AccountScreen}/>
      </Tabe.Navigator>
    </NavigationContainer>
  );
}

export default TabNav;
