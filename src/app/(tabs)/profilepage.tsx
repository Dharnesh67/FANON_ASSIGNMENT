import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    website: "",
  });
  const [selectedImage, setSelectedImage] = useState("");
  const placeholderImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

  const handlePost = () => {
    const { email, username, website } = formData;

    if (!email || !username || !website) {
      Alert.alert("Error", "Please fill in all fields before updating.");
      return;
    }

    console.log("Profile Updated:", formData);
    Alert.alert("Success", "Your profile has been updated!");
    setFormData({ email: "", username: "", website: "" });
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
      Alert.alert("No Image Selected", "You did not select any image.");
    }
  };

  const handleInputChange = (key:any, value:any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <View className="flex-1 items-center p-4 bg-gray-100">
      {/* Profile Picture */}
      <Pressable onPress={pickImageAsync}>
        <Image
          source={{ uri: selectedImage || placeholderImage }}
          className="w-56 h-56 rounded-full border border-gray-300"
          resizeMode="cover"
        />
      </Pressable>
      <Text className="text-lg mt-4 text-blue-500 font-semibold">
        Tap the image to update
      </Text>

      {/* Input Fields */}
      <View className="w-full px-4 mt-6">
        <TextInput
          value={formData.email}
          onChangeText={(value) => handleInputChange("email", value)}
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg bg-white"
          keyboardType="email-address"
        />
        <TextInput
          value={formData.username}
          onChangeText={(value) => handleInputChange("username", value)}
          placeholder="Username"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg bg-white"
        />
        <TextInput
          value={formData.website}
          onChangeText={(value) => handleInputChange("website", value)}
          placeholder="Website"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg bg-white"
          keyboardType="url"
        />
      </View>

      {/* Buttons */}
      <View className="w-full px-4">
        <Pressable
          onPress={handlePost}
          className="mb-4 bg-blue-500 py-3 items-center rounded-full"
        >
          <Text className="text-white text-lg font-semibold">Update</Text>
        </Pressable>
        <Pressable
          onPress={() => Alert.alert("Signout", "You have been signed out.")}
          className="bg-red-500 py-3 items-center rounded-full"
        >
          <Text className="text-white text-lg font-semibold">Signout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
