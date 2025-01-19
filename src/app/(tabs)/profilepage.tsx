import { View, Text, Image } from "react-native";
import React from "react";
import Pinchable from 'react-native-pinchable';
const profilepage = () => {
  return (
    <View>
      {/* <Pinchable></Pinchable> */}
      <Image
        source={{ uri: "https://cdn.pixabay.com/photo/2025/01/13/19/40/horse-9331340_1280.jpg" }}
        className="w-full aspect-square"
        resizeMode="contain"
      />
    </View>
  );
};

export default profilepage;
