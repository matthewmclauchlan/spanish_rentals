import React from "react"; // ✅ Ensure React is imported
import { View, Text } from "react-native"; // ✅ Correct React Native import

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Welcome to Expo!</Text>
    </View>
  );
}
