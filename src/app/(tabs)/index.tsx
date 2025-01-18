import { FlatList, Text, Image } from "react-native";
import React from "react";
import post from "../../../assets/data/items.json";
import ZoomableImage from "../../components/zooomedimage";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Postlistitem from "../../components/postlistitem";
// import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  return (
    <FlatList
      data={post}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <Postlistitem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default index;