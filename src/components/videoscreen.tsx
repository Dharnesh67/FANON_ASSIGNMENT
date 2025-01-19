import React from "react";
import { Video } from "expo-av";
import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

const VideoScreen = ({ videoSource }:any) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoSource }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
      />

      {/* Icons */}
      <View className="absolute right-5 bottom-100 flex-col justify-between items-center h-150">
        <AntDesign name="hearto" size={30} color="white" style={styles.icon} />
        <FontAwesome5 name="comment" size={30} color="white" style={styles.icon} />
        <FontAwesome name="paper-plane-o" size={30} color="white" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    position: "absolute",
    right: 20, // Distance from the right edge
    bottom: 200, // Adjust position from the bottom
    justifyContent: "space-between",
    alignItems: "center",
    height: 150, // Space between icons
  },
  icon: {
    marginBottom: 20, // Spacing between each icon
  },
});

export default VideoScreen;
