import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Tabs } from 'expo-router'
const TabsLayout = () => {
  return (
  
      <Tabs screenOptions={{tabBarActiveTintColor:'purple'}}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      </Tabs>
  )
}

export default TabsLayout