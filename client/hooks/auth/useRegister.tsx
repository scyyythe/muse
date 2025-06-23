import { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { router } from "expo-router";
import API from "@/utils/api";

export default function useRegister() {
  const [loading, setLoading] = useState(false);

  const register = async (fullName: string, email: string, password: string, confirmPassword: string) => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/register", {
        fullName,
        email,
        password,
      });

      Alert.alert("Success", "Registration successful!", [
        {
          text: "OK",
          onPress: () => router.push("/auth/login"),
        },
      ]);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        Alert.alert("Error", error.response?.data?.error || "Registration failed.");
      } else {
        Alert.alert("Error", "Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
}
