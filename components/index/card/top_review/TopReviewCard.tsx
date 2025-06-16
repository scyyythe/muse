import Header from "@/app/header";
import { topReviews } from "@/components/data/index/topReviews";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function TopReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = topReviews.find((r) => r.id === Number(id));
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  const handleShare = () => {
    // For now just log; integrate expo-sharing or Linking later
    alert(`Share: ${review.title}`);
  };

  const openLink = (platform: "spotify" | "youtube") => {
    const url =
      platform === "spotify"
        ? `https://open.spotify.com/search/${encodeURIComponent(review.title)}`
        : `https://www.youtube.com/results?search_query=${encodeURIComponent(review.title)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Header title="Top Review" textColor={textColor} />

      <Animated.View entering={FadeInUp.delay(100).duration(600)}>
        <Image
          source={{ uri: review.image }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 16,
            marginBottom: 20,
          }}
          resizeMode="cover"
        />
      </Animated.View>

      <BlurView
        intensity={50}
        tint="dark"
        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: 20,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <Animated.View entering={FadeInUp.delay(200).duration(600)}>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 8 }}>
            {review.title}
          </Text>

          <Text style={{ fontSize: 15, fontFamily: "Poppins_400Regular", color: subText, marginBottom: 10, lineHeight: 22 }}>
            {review.content}
          </Text>

          <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium", color: subText }}>
            — {review.author}
          </Text>
        </Animated.View>

        {/* Action Row */}
        <Animated.View
          entering={FadeInUp.delay(300).duration(600)}
          style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}
        >
          <TouchableOpacity
            onPress={() => alert("Liked!")}
            style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
          >
            <Ionicons name="heart-outline" size={20} color={textColor} />
            <Text style={{ color: textColor, fontFamily: "Poppins_500Medium" }}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleShare}
            style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
          >
            <Ionicons name="share-outline" size={20} color={textColor} />
            <Text style={{ color: textColor, fontFamily: "Poppins_500Medium" }}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink("spotify")}>
            <Entypo name="spotify" size={22} color="#1DB954" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink("youtube")}>
            <Entypo name="youtube" size={22} color="#FF0000" />
          </TouchableOpacity>
        </Animated.View>
      </BlurView>
    </ScrollView>
  );
}
