import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { spacing } from "../constants/spacing";
import { parks } from "../data/parks";

export default function Parks() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Parks Page</Text>
      <FlatList
        data={parks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/ParkDetails/${item.id}`)}
            style={{
              backgroundColor: "green",
              padding: spacing.md,
              borderRadius: 8,
              margin: spacing.sm,
            }}
          >
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    gap: spacing.gap,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  card: {
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.sm,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});
