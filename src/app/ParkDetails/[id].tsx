import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { parks } from "../../data/parks";

export default function ParkDetails() {
  const { id } = useLocalSearchParams();
  const [visible, setVisible] = useState(false);

  const park = useMemo(() => {
    return parks.find((p) => p.id.toString() === id);
  }, [id]);

  if (!park) {
    return (
      <View>
        <Text>Park not found</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{park.name}</Text>

      <Text style={{ marginTop: 8 }}>{park.description}</Text>

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          marginTop: 20,
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>View Trails</Text>
      </Pressable>

      <Modal visible={visible} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 12,
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Trails coming soon 🚶
            </Text>

            <Pressable
              onPress={() => setVisible(false)}
              style={{ marginTop: 12 }}
            >
              <Text style={{ color: "blue" }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
