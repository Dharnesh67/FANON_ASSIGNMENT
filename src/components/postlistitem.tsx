import { View, Text, Image } from "react-native";
import React from "react";
import ZoomableImage from "../components/zooomedimage";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
const Postlistitem = (props: any) => {
    const [isliked, setisliked] = useState(false);
  const post = props.post;
  return (
    <View>
      <View className="bg-white ">
        <View className="flex-row items-center p-1 gap-2 card ">
          <Image source={{ uri: post.user.image_url }} className="w-12 aspect-[1] rounded-full" />
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        {/* <ZoomableImage imageSource={{ uri: post.image_url }} /> */}

        <ZoomableImage
          imageComponent={
              <Image source={{ uri: post.image_url }} className="w-full h-full" resizeMode="contain" />
           
          }
        />
        <View className="icons flex-row justify-between p-3">
          <View className="flex-row gap-3">
          {isliked ? <AntDesign name="hearto"   onPress={() => setisliked(!isliked)} size={23} />: <AntDesign  name="heart" color="red" size={23} onPress={() => setisliked(!isliked)} />}
            <Ionicons name="chatbubble-outline" size={23} />
            <Feather name="send" size={23} />
          </View>
          <View>
            <FontAwesome name="bookmark-o" size={23} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Postlistitem;
