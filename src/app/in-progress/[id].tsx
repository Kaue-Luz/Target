import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";

const details = {
  current: "R$ 50,00",
  target: "R$ 100,00",
  percentage: 50,
};

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="In Progress"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
      <Progress data={details} />
    </View>
  );
}
