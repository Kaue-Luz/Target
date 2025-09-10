import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";

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
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <Target
        data={targets[0]}
      />
      <Target
        data={targets[1]}
      />
    </View>
  );
}
