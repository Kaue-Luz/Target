import { router } from "expo-router";
import { Button, Text, View } from "react-native";

import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Hello Expo Router</Text>

      <Button title="Nova Meta" onPress={() => router.navigate("/target")} />

      <Button
        title="Transaction"
        onPress={() => router.navigate("/transaction/13")}
      />

      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/234")}
      />
    </View>
  );
}
