import { View } from "react-native";

import { styles } from "./styles";
import { colors } from "@/theme";

import { Option } from "./option";
import { TransactionTypes } from "@/utils/TransactionTypes";

type Props = {
    selected: TransactionTypes
    onchange: (type: TransactionTypes) => void
}

export function TransactionType({ selected, onchange }: Props) {
    return (
        <View style={styles.container}>
            <Option
                isSelected={selected === TransactionTypes.INPUT}
                title="Guardar"
                icon="arrow-upward"
                selectedColor={colors.blue[500]}
                onPress={() => onchange(TransactionTypes.INPUT)}
            />
            <Option
                isSelected={selected === TransactionTypes.OUTPUT}
                title="Resgatar"
                icon="arrow-downward"
                selectedColor={colors.red[400]}
                onPress={() => onchange(TransactionTypes.OUTPUT)}
            />
        </View>
    )
}