import { TextStyle } from "react-native";
import { colors } from "./colors";

export const typography: Record<string, TextStyle> = {
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },

  body: {
    fontSize: 16,
    color: colors.text,
  },

  small: {
    fontSize: 12,
    color: colors.secondary,
  },
};
