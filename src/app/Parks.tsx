import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Parks() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parks Page</Text>
      <Pressable
        onPress={() => router.push("/ParkDetails")}
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        View Details
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
  text: {
    color: "white",
    fontSize: 20,
  },
});
