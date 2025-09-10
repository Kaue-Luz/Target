import { View, StatusBar } from "react-native";
import { router } from "expo-router";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";

const summary = {
  total: "2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Viagem para o Japão",
    percentage: "40%",
    current: "R$ 2.680,00",
    target: "R$ 6.700,00",
  },
  {
    id: "2",
    name: "Fazer um curso de React Native",
    percentage: "70%",
    current: "R$ 1.400,00",
    target: "R$ 2.000,00",
  },
  {
    id: "3",
    name: "Trocar de celular",
    percentage: "10%",
    current: "R$ 400,00",
    target: "R$ 4.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta cadastrada"
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
