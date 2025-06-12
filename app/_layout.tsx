// app/_layout.tsx
import { useColorScheme } from "@/hooks/useColorScheme";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Main Tab App */}
        <Stack.Screen name="(tabs)" />

        {/* Extra screens outside tabs */}
        <Stack.Screen name="display/editors-picks/index" />
        <Stack.Screen name="+not-found" />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
