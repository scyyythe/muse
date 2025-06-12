import trendingItems from "@/components/data/index/trendingItems";

import MusicReviewSection from "@/components/index/music_reviews/MusicReviewSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "../header";
const { width } = Dimensions.get("window");

export default function MusicDetailPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = trendingItems.find((item) => item.id === Number(id));

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor }}>
        <Text style={{ color: textColor }}>Music not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor }} contentContainerStyle={{ paddingTop: 70, padding: 20 }}>
      <Animatable.View animation="fadeInUp" duration={500} delay={50}>
        <Header title="Music" textColor={textColor} />

        <Image
          source={{ uri: item.image }}
          style={{
            width: width * 0.5,
            height: width * 0.5,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 24,
          }}
        />

        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 4, color: textColor }}>
          {item.title}
        </Text>

        <Text style={{ fontSize: 14, textAlign: "center", color: subText, marginBottom: 12 }}>
          {item.type} • {item.genre} • {item.year}
        </Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6, color: textColor }}>Artist</Text>
          <Text style={{ color: subText }}>{item.artist}</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6, color: textColor }}>Description</Text>
          <Text style={{ color: subText }}>{item.description}</Text>
        </View>

        <MusicReviewSection />
      </Animatable.View>
    </ScrollView>
  );
}
