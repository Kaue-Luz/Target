import { View } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
      />

      <View style={{ marginTop: 32, gap: 34 }}>
        <Input label="Nome da meta" placeholder="Ex: Comprar um carro" />

        <CurrencyInput
          label="Valor alvo"
          placeholder="Ex: R$ 1.000,00"
          value={0}
        />
        <Button title="Salvar" isProcessing />
      </View>
    </View>
  );
}
