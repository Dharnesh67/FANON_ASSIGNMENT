import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import VideoScreen from "../components/videoscreen";

const { height } = Dimensions.get("window");

const reel = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    const apiKey = "39496842-90b2dd2ff2fe77ae992b7d5a8"; // Replace with your actual API key
    try {
      const response = await fetch(
        `https://pixabay.com/api/videos/?key=${apiKey}&q=nature`
      );
      const data = await response.json();
      setVideos(data.hits);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="h-screen">
            <VideoScreen videoSource={item.videos.medium.url} />
          </View>
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default reel;
