import { View, Text } from 'react-native'
import React from 'react'
import VideoScreen from '../../components/videoplayer'


const videoSource="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
const reel = () => {
  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Text>reels</Text>
      <VideoScreen videoSource={videoSource}/>
    </View>
  )
}

export default reel