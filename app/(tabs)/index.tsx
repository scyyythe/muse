import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";
export default function Dashboard() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={[{ fontSize: 20 }, { color: textColor }]}>Welcome to the Dashboard</Text>
    </View>
  );
}
