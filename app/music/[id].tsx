import trendingItems from "@/components/index/data/trendingItems";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function MusicDetailPage() {
  const { id } = useLocalSearchParams();
  const item = trendingItems.find((item) => item.id === Number(id));

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text style={{ color: textColor }}>Music not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: width * 0.50,
          height: width * 0.50,
          borderRadius: 20,
          alignSelf: "center",
          marginBottom: 24,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 4,
          color: textColor,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          color: subText,
          marginBottom: 12,
        }}
      >
        {item.type} • {item.genre} • {item.year}
      </Text>

      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 6,
            color: textColor,
          }}
        >
          Artist
        </Text>
        <Text style={{ color: subText }}>{item.artist}</Text>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 6,
            color: textColor,
          }}
        >
          Description
        </Text>
        <Text style={{ color: subText }}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}
