import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, View } from "react-native";
export default function ReviewsScreen() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>Welcome to the My Reviews Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "600" },
});
