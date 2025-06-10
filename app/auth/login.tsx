import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { LoginScreenNavigationProp } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  navigation: LoginScreenNavigationProp;
};
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <LinearGradient colors={["#0b0b0f", "#0a0a12", "#050509"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 30 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={15} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign In</Text>
        </View>

        <View style={styles.upperContainer}>
          <Text style={styles.logo}>MUSE</Text>
          <Text style={styles.description}>Log in now to start your musical{"\n"}journey with Muse.</Text>
        </View>

     <View style={styles.InputContainer}>
  <Label>Email</Label>
  <Input
    placeholder="Enter your email"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
  />

  <Label style={{ marginTop: 16 }}>Password</Label>
  <View style={styles.passwordWrapper}>
    <Input
      placeholder="Enter your password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
    />
    <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeIcon}>
      <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#999" />
    </TouchableOpacity>
  </View>


  <View style={styles.forgotPasswordContainer}>
    <TouchableOpacity onPress={() => router.push("/auth/ForgotPassword")}>
  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
</TouchableOpacity>

  </View>
</View>


        <Button color="#7f5af0" variant="filled" style={{ padding:15,marginTop:20 }} >
          Sign In
        </Button>

        <View style={styles.IconsContainer}>
          <Text style={styles.signWith}>or sign in with</Text>
          <View style={styles.socialContainer}>
              <Image source={require("@/assets/icons/gmail-white.png")} style={styles.socialIcon} />
                        <Image source={require("@/assets/icons/meta-white.png")} style={styles.socialIcon} />
                        <Image source={require("@/assets/icons/apple-white.png")} style={styles.socialIcon} />
          </View>
        </View>

        <Text style={styles.signInPrompt}>
          Don’t have an account?{" "}
         <Text style={styles.signInLink} onPress={() => router.push("/auth/register")}>
  Register
</Text>
        </Text>
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
    color:'#ffffff'
  },

  title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 22,
    color: "#ffffff",
    marginBottom: 20,
    alignSelf: "center",
  },
  signWith: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: "#ffffff",
    textAlign: "center",
  },
  registerButton: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 6,
  },

  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    gap: 10,
    fontFamily: "Poppins_700Bold",
  },
  signInPrompt: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: "#ffffff",
    marginTop: 10,
  },

  signInLink: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: "#7f5af0",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  IconsContainer: {
    marginTop: 20,
  },
  InputContainer: {
    width: "100%",
    marginTop: 20,
    gap: 5,
  },
  passwordWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 45,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "20%",
  },
  forgotPasswordContainer: {
  marginTop: 8,
  alignItems: 'flex-end',
},

forgotPasswordText: {
  color: '#ffffff',
  fontSize: 14,
},

});
