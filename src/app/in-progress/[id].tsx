import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Transaction, TransactionProps } from "@/components/Transaction";

import { TransactionTypes } from "@/utils/TransactionTypes";

const details = {
  current: "R$ 50,00",
  target: "R$ 100,00",
  percentage: 50,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 50,00",
    date: "2024-06-01",
    description: "Grocery shopping",
    type: TransactionTypes.INPUT,
  },
  {
    id: "2",
    value: "R$ 30,00",
    date: "2024-06-02",
    description: "Transport",
    type: TransactionTypes.OUTPUT,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="In Progress"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação cadastrada."
      />

      <Button
        title="Nova Transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
