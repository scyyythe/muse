import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      handleGoogleLogin(response.authentication.accessToken);
    }
  }, [response]);

  const handleGoogleLogin = async (accessToken: string) => {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const user = await res.json();
      console.log("✅ Google user info:", user);

      const backendRes = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/google-auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          fullName: user.name,
          picture: user.picture,
        }),
      });

      const data = await backendRes.json();

      if (!backendRes.ok) {
        throw new Error(data.error || "Google login failed");
      }

      await AsyncStorage.setItem("token", data.token); // ✅ Replaced SecureStore
      Alert.alert("Success", "Logged in with Google!");
      router.replace("/(tabs)");
    } catch (err) {
      console.error("❌ Google Login Error:", err);
      Alert.alert("Login Failed", "Unable to sign in with Google.");
    }
  };

  return { promptAsync, request };
}
