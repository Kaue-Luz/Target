import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello Expo Router</Text>

      <Button title="Go to Target" onPress={() => router.navigate("/target")} />
      <Button
        title="Transaction"
        onPress={() => router.navigate("/transaction/13")}
      />
    </View>
  );
}
