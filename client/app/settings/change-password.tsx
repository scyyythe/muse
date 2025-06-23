import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../header";

export default function ChangePassword() {
  const router = useRouter();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20, paddingTop: 30 }}>
      <Header title="Change Password" textColor={textColor} />

      <TextInput
        placeholder="Current Password"
        placeholderTextColor={border}
        secureTextEntry
        style={{
          borderBottomWidth: 1,
          borderBottomColor: border,
          paddingVertical: 12,
          marginBottom: 20,
          fontSize: 16,
          color: textColor,
        }}
      />
      <TextInput
        placeholder="New Password"
        placeholderTextColor={border}
        secureTextEntry
        style={{
          borderBottomWidth: 1,
          borderBottomColor: border,
          paddingVertical: 12,
          marginBottom: 20,
          fontSize: 16,
          color: textColor,
        }}
      />
      <TextInput
        placeholder="Confirm New Password"
        placeholderTextColor={border}
        secureTextEntry
        style={{
          borderBottomWidth: 1,
          borderBottomColor: border,
          paddingVertical: 12,
          marginBottom: 30,
          fontSize: 16,
          color: textColor,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: button,
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => {
          // TODO: Add actual change password logic
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
