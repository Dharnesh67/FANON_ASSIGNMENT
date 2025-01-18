import { View, Text } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import src from '../../../assets/Video.mp4';

const reel = () => {
  return (
    <View>
      <Video  
        source={{ uri: src }}
        repeat={true}
        style={{ width: '100%', height: 300 }} // Ensure the video has a defined size
        onError={(error) => console.log('Video Error:', error)} // Add error handling
      />
    </View>
  );
};

export default reel;