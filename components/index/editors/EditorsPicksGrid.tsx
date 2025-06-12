import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { editorPicks } from "../../data/index/editorsPicks";

export default function EditorsPicksGrid() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const router = useRouter();

  return (
    <FlatList
      data={editorPicks}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/editor/${item.id}`)}
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 12,
            padding: 10,
            width: "48%",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: 100, borderRadius: 10, marginBottom: 8 }}
            resizeMode="cover"
          />
          <Text style={{ color: textColor, fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>{item.title}</Text>
          <Text style={{ color: subText, fontSize: 12 }}>{item.subtitle}</Text>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
