import { useColorScheme } from "@/hooks/useColorScheme";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, useNavigationContainerRef, router, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const segments = useSegments();

  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      setIsAuthenticated(!!token);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) return;

    const inTabs = segments[0] === "(tabs)";

    if (!isAuthenticated && inTabs) {
      router.replace("/");
    } else if (isAuthenticated && !inTabs) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, segments]);

  if (!loaded || isAuthenticated === null) {
    return null; // Or splash screen
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
