import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "../../components/imagepicker";

const Create = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const placeholderImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

  const handlePost = () => {
    // Handle the post creation logic here
    console.log("Post Created:", text);
    setTitle(text);
    setText(""); // Clear the input after posting
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View className="flex-1 items-center p-4 bg-gray-100">
      {/* Image Picker */}
      <Image
        source={{ uri: selectedImage || placeholderImage }}
        className="w-52 h-72 rounded-2xl bg-gray-200"
      />

      {/* Create Post Title */}
      <Text className="text-xl mt-4 text-blue-500 font-semibold">Create a Post</Text>

      {title && (
        <View className="flex-row items-center border-b border-gray-300 w-11/12 mt-4">
          <Text className="text-lg text-black">{title}</Text>
        </View>
      )}

      {/* Buttons for Image Selection */}
      <View className="text-black">
        <Button theme="primary" label="Choose a Photo" onPress={pickImageAsync} />
        <Button label="Use this Photo"  />
      </View>

      {/* Text Input */}
      <TextInput
        value={text}
        onChangeText={(v) => setText(v)} // Update state with the input value
        placeholder="Write your post here..."
        className="w-11/12 mt-2 p-3 border border-gray-300 rounded-xl bg-white"
        multiline
        numberOfLines={4}
      />

      {/* Post Button */}
      <Pressable
        onPress={handlePost}
        className="mt-auto w-full bg-blue-500 py-3 items-center rounded-full"
      >
        <Text className="text-white text-lg font-semibold">Post</Text>
      </Pressable>
    </View>
  );
};

export default Create;
