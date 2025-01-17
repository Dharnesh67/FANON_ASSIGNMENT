import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import { Redirect } from 'expo-router'
import React from 'react'

const Home = () => {
  return (
   <Redirect href="/(tabs)"/>
  )
}

export default Home