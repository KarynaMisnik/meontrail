import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ParkDetails() {
  const router = useRouter();
  return (
    <View>
      <Text>Park Name</Text>
      <Text>Description</Text>
      <Text>Img here</Text>
      <Pressable
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        View Trails
      </Pressable>
    </View>
  );
}
