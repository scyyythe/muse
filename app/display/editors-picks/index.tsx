import EditorsPicksGrid from "@/components/index/editors/EditorsPicksGrid";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";

export default function EditorsPicksScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={{ flex: 1, backgroundColor, paddingTop: 70, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 22, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 20 }}>
        All Editor's Picks
      </Text>
      <EditorsPicksGrid />
    </View>
  );
}
