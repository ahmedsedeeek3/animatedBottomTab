import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useDrawerStatus, useDrawerProgress } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  FadeInRight
} from "react-native-reanimated";
//Home
function HomeScreen({ navigation }) {
  const isDrawerOpen = useDrawerStatus() === "open";
  const progress = useDrawerProgress();
  //console.log(progress.value)
  //
  const scale2 = useSharedValue(1);
  const scaleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const translateToX = interpolate(progress.value, [0, 1], [0, -100]);

    return {
      transform: [{ scale: scale }, { translateX: translateToX }],
    };
  });
  //scale

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        },
        { ...scaleAnimation },
      ]}
    >
      <Text style={{ fontSize: 25 }}>Home Screen</Text>
    </Animated.View>
  );
}
// setting
function SettingScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>setting Screen</Text>
    </View>
  );
}
//account
function AccountScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>Account Screen</Text>
    </View>
  );
}
// getIconFIlePath
const getIconFIlePath = (routName) => {
  let iconePath;
  switch (routName) {
    case "Home":
      iconePath = require("../../assets/lotte/home.json");
      break;
    case "Setting":
      iconePath = require("../../assets/lotte/setting.json");
      break;
    case "Account":
      iconePath = require("../../assets/lotte/user.json");
      break;
    default:
      iconePath = "exclamationcircleo";
      break;
  }
  return iconePath;
};

//Tab Bar Bottom

function Bottom({ props, route }) {
  const iconName = route.name;
  const isFocused = props.accessibilityState.selected;
  const filePath = getIconFIlePath(iconName);
  const transtion=useSharedValue(0)
  const translateToX=useSharedValue(0)
 
  // animation

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.tabContainerStyle}
    >
      <Animated.View
        
        style={[
          styles.tabIconStyle,
          { backgroundColor: isFocused ? "green" : "white" }
        ]}
      >
        <Animated.View style={{transform:[{translateX:isFocused?-20:0}]}}>
        <Text style={{ fontSize: 20, fontWeight: "600",color:isFocused?"white":"gray" }}>{iconName}</Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

//-->>Create Navigation  ---

const Tabe = createBottomTabNavigator();

function TabNav() {
  return (
    <Tabe.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarButton: (props) => <Bottom props={props} route={route} />,
      })}
    >
      <Tabe.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tabe.Screen name="Setting" component={SettingScreen} />
      <Tabe.Screen name="Account" component={AccountScreen} />
    </Tabe.Navigator>
  );
}

export default TabNav;
// style sheet ---use it where ever you can for performance
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: "absolute",
    borderRadius: 16,
    bottom: 30,
    right: 16,
    left: 16,
    paddingTop:5
   
  },
  tabContainerStyle: {
    width: "33%",
    height: 50,
  },
  tabIconStyle: {
    flex: 1,
    width: "100%",
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
