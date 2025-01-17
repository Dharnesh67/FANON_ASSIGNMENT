import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Tabs } from 'expo-router'
const TabsLayout = () => {
  return (
    <View>
      {/* <Text>TabsLayout</Text> */}
      <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color='black' />,
        }}
      />
      </Tabs>
    </View>
  )
}

export default TabsLayout