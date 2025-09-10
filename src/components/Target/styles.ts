import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    height: 72,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    gap: 7,
  },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.black,
  },
  status: {
    fontFamily: fontFamily.regular,
    fontSize: 10,
    color: colors.gray[500],
  },
});
