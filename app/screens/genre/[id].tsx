import Header from "@/app/header";
import { genres } from "@/components/data/index/genres";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
export default function GenreDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const genre = genres.find((g) => g.id.toString() === id);

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  if (!genre) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>Genre not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 30, padding: 30 }}>
      <Header title="Music" textColor={textColor} />
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={{ uri: genre.image }} style={{ width: 100, height: 100, borderRadius: 16, marginBottom: 12 }} />
        <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold" }}>{genre.name}</Text>
        <Text style={{ fontSize: 14, color: "#888", fontFamily: "Poppins_400Regular" }}>
          {genre.reviewCount} Reviews
        </Text>
      </View>

      <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
        Display genre-specific albums, top reviews, and more here.
      </Text>
    </ScrollView>
  );
}
