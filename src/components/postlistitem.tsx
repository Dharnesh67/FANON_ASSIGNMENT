import { View, Text, Image } from "react-native";
import React from "react";
import ZoomableImage from "../components/zooomedimage";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import VideoScreen from "./videoplayer";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import { AdvancedImage } from "cloudinary-react-native";
import { cld } from "../Lib/cloudinary";
import { useEffect } from "react";
import { fetchRandomImage } from "../components/GenerateRandom";

// Create a Cloudinary instance and set your cloud name.
const Postlistitem = ({ post }: any) => {



  // cld.image returns a CloudinaryImage with the configuration set.
  const [isliked, setisliked] = useState(false);
  const [likecounter, setlikecounter] = useState(7);
  const [avatar, setAvatar] = useState("");
  const [postImage, setPostImage] = useState("");
  useEffect(() => {
    // Fetch random avatar
    fetchRandomImage("avatar").then((url) => setAvatar(url));
    // Fetch random post image
    fetchRandomImage("nature").then((url) => setPostImage(url));
  }, []);
  const Handlelike = () => {
    setisliked(!isliked);
    if (isliked) {
      setlikecounter(likecounter + 1);
    } else {
      setlikecounter(likecounter - 1);
    }
  };
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      console.log("Double Tap"); // Double tap event
      // Handlelike();
    });
  return (
    <GestureHandlerRootView>
      <View className="bg-white border border-gray-200 rounded-2xl ">
        <View className="flex-row items-center p-1 gap-2 card ">
          <Image source={{ uri: avatar }} className="w-12 aspect-[1] rounded-full" />
          {/* <AdvancedImage
            cldImg={cld.image(post.user.avatar_url)}
            className="w-12 aspect-[1] rounded-full"
          /> */}
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        {/* <ZoomableImage imageSource={{ uri: post.image_url }} /> */}
        {post.isvideo == "false" && (
          <GestureDetector gesture={doubleTap}>
            <ZoomableImage
              imageComponent={
                // <AdvancedImage cldImg={cld.image(post.image)} className="w-full h-full" />
                <Image source={{ uri: postImage }} className="w-full h-full" resizeMode="contain" />
              }
            />
          </GestureDetector>
        )}
        {post.isvideo == "true" && <VideoScreen videoSource={post.video_url} />}
        <View className="icons flex-row justify-between items-center p-3">
          <View className="flex-row gap-3 justify-between items-center">
            {isliked ? (
              <AntDesign name="hearto" onPress={Handlelike} size={23} />
            ) : (
              <AntDesign name="heart" color="red" size={23} onPress={Handlelike} />
            )}
            <Text className="text-lg">{likecounter}</Text>
            <Ionicons name="chatbubble-outline" size={23} />
            <Feather name="send" size={23} />
          </View>
          <View>
            <FontAwesome name="bookmark-o" size={23} />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Postlistitem;
