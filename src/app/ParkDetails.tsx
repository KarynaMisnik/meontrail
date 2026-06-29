import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { colors } from "../constants";
import { radii } from "../constants/radii";
import { spacing } from "../constants/spacing";
import { parks } from "../data/parks";

export default function ParkDetails() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <FlatList
        data={parks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Img here</Text>
          </View>
        )}
      />

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          backgroundColor: "green",
          padding: spacing.md,
          borderRadius: radii.sm,
        }}
      >
        <Text>View Trails Modal</Text>
      </Pressable>

      <Modal visible={visible} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: spacing.lg,
              borderRadius: radii.md,
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
