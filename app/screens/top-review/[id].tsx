import Header from "@/app/header";
import { topReviews } from "@/components/data/index/topReviews";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
export default function TopReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = topReviews.find((r) => r.id === Number(id));
  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
          <Header title="Top Review" textColor={textColor} />
        
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
      <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", marginBottom: 12,color: textColor }}>
        {review.title}
      </Text>
      <Text style={{ fontSize: 15, fontFamily: "Poppins_400Regular", marginBottom: 8, color: subText }}>
        {review.content}
      </Text>
      <Text style={{ fontSize: 14, fontFamily: "Poppins_500Regular", color: subText}}>
        — {review.author}
      </Text>
    </ScrollView>
  );
}
