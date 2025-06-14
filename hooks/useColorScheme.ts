import type { ColorSchemeName } from "react-native";
import { useColorScheme as _useColorScheme } from "react-native";

export function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() ?? "light";
}
