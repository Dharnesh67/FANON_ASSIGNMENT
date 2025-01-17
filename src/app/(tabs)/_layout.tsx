import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: false,headerTitleStyle:{fontWeight:700 } }}>
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
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="plus-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profilepage"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
