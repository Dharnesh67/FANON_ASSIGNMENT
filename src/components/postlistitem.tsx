import { View, Text, Image } from "react-native";
import React from "react";
import ZoomableImage from "../components/zooomedimage";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
const Postlistitem = (props:any) => {
    const post=props.post;
  return (
    <View>
      <View className="bg-white ">
        <View className="flex-row items-center p-1 gap-2 card ">
          <Image source={{ uri: post.user.image_url }} className="w-12 aspect-[1] rounded-full" />
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
        {/* <ZoomableImage imageSource={{ uri: post.image_url }} /> */}
        <View className="icons flex-row justify-between p-3">
          <View className="flex-row gap-3">
            <AntDesign name="hearto" size={20} />
            <Ionicons name="chatbubble-outline" size={20} />
            <Feather name="send" size={20} />
          </View>
          <View>
            <FontAwesome name="bookmark-o" size={20} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Postlistitem