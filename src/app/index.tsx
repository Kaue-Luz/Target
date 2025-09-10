import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

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
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta cadastrada"
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
