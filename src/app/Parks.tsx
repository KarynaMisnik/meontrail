import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Parks() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parks Page</Text>
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
