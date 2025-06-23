import { Colors } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useTheme();
  const colorFromProps = props[theme];

  return colorFromProps ?? Colors[theme][colorName];
}
