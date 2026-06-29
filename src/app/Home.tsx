import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";
import { radii } from "../constants/radii";
import { spacing } from "../constants/spacing";
import { typography } from "../constants/typography";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.title}>MeOnTrail</Text>
      </View>
      <View style={styles.content}>
        <Pressable
          onPress={() => router.push("/Parks")}
          style={{
            backgroundColor: colors.primary,
            padding: spacing.md,
            borderRadius: radii.md,
          }}
        >
          <Text style={typography.title}>Go to Parks</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/CommunityBoard")}
          style={{
            backgroundColor: "purple",
            padding: spacing.md,
            borderRadius: radii.sm,
          }}
        >
          <Text style={typography.title}>Community Board</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    borderBottomWidth: 3,
    borderBottomColor: colors.border,
  },
  content: {
    gap: spacing.md,
  },
});
