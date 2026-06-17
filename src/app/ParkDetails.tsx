import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function ParkDetails() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Text>Park Name</Text>
      <Text>Description</Text>
      <Text>Img here</Text>
      <Pressable
        onPress={() => setVisible(true)}
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        View Trails Modal
      </Pressable>

      <Modal visible={visible} transparent={true} animationType="fade">
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
            }}
          >
            <Text>Hello from modal!</Text>

            <Pressable onPress={() => setVisible(false)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
