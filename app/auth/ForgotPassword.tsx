import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
  
    console.log("Password reset link sent to:", email);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <LinearGradient colors={["#0b0b0f", "#0a0a12", "#050509"]} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 30 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={15} color="#ffffff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Forgot Password</Text>
          </View>

          <View style={styles.upperContainer}>
            <Text style={styles.logo}>MUSE</Text>
            <Text style={styles.description}>
              Enter your email and we'll send you {"\n"} instructions to reset your password.
            </Text>
          </View>

          <View style={styles.InputContainer}>
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <Button
            color="#7f5af0"
            variant="filled"
            style={{ padding: 15, marginTop: 30 }}
            onPress={handleSubmit}
          >
            Send Reset Link
          </Button>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 4,
  },
  upperContainer: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#ffffff",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 22,
    color: "#ffffff",
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  InputContainer: {
    width: "100%",
    marginTop: 20,
    gap: 5,
  },
});
