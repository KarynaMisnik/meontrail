import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { typography } from "../constants/typography";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log("Button pressed")}
        style={{
          backgroundColor: "blue",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={typography.title}>MeOnTrail</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/Parks")}
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={typography.title}>Go to Parks</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/CommunityBoard")}
        style={{
          backgroundColor: "purple",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={typography.title}>Community Board</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    gap: 10,
  },
});
