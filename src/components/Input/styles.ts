import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  label: {
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
    fontSize: 12,
  },
  input: {
    fontFamily: fontFamily.regular,
    color: colors.black,
    fontSize: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[400],
  },
});
