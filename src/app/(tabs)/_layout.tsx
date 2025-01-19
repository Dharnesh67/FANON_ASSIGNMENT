import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';

import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        headerTitleStyle: { fontWeight: "700" }, // Corrected to string value
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create Post",
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profilepage"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reel"
        options={{
          title: "Reels",
          tabBarIcon: ({ color }) =><Entypo name="video-camera" size={24} color={color} />,
          headerShown: true, // Hides the header for the Reels screen
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
