import { useCallback, useState } from "react";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Alert, View } from "react-native";

import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { Loading } from "@/components/Loading";

import { TransactionTypes } from "@/utils/TransactionTypes";

import { useTargetDatabase } from "@/database/useTargetDatabase";
import { numberToCurrency } from "@/utils/numberToCurrency";

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
  const [isFetching, setIsFetching] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    current: "R$ 00,00",
    target: "R$ 00,00",
    percentage: 0,
  });

  const params = useLocalSearchParams<{ id: string }>();

  const targetDatabase = useTargetDatabase();

  async function fetchDetails() {
    try {
      const response = await targetDatabase.show(Number(params.id));
      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        target: numberToCurrency(response.amount),
        percentage: response.percentage,
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os detalhes.");
      console.log(error);
    }
  }

  async function fetchData() {
    const fetchDetailsPromise = fetchDetails();

    await Promise.all([fetchDetailsPromise]);
    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title={details.name}
        rightButton={{
          icon: "edit",
          onPress: () => router.navigate(`/target?id=${params.id}`),
        }}
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
