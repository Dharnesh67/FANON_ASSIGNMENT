import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";

const Create = () => {
  const [text, setText] = useState("");
  const image = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";
  const [Title, setTitle] = useState("")
  const handlePost = () => {
    // Handle the post creation logic here
    console.log("Post Created:", text);
    setTitle(text);
    setText(""); // Clear the input after posting
  };

  return (
    <View className="flex flex-1 items-center text-purple-500 p-2">
      {/* Image Picker */}
      <Image source={{ uri: image }} className="w-52 aspect-[3/4] rounded-2xl bg-slate-200" />

      {/* Create Post Title */}
      <Text className="text-xl mt-4 text-blue-500">Create a post</Text>

      {
        Title && <View className="flex flex-row items-center border-b border-gray-300 w-72 justify-between">
          <Text className="text-xl mt-4 text-black">{Title}</Text> 
        </View> 
      }

      {/* Text Input */}
      <TextInput
        value={text}
        onChangeText={(v)=> setText(v)} // Update state with the input value
        placeholder="Write your post here..."
        className="w-72 mt-2 p-2 border border-gray-300 rounded-xl"
        multiline
        numberOfLines={4}
      />

      {/* Button */}
      <View className="mt-auto w-full">

      <Pressable onPress={handlePost} className="mt-4 bg-blue-500 py-2 px-6 items-center  rounded-md">
        <Text className="text-white text-lg">Post</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default Create;
