import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
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
              padding: 12,
              borderRadius: 8,
              margin: 8,
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
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  card: {
    marginBottom: 16,
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});
