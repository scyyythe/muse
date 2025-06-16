import Header from "@/app/header";
import { topReviews } from "@/components/data/index/topReviews";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import { Image, Platform, ScrollView, Text, View } from "react-native";

export default function TopReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = topReviews.find((r) => r.id === Number(id));

  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor }}
      contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
    >
      <Header title="Top Review" textColor={textColor} />

      {/* Album Cover */}
      <Image
        source={{ uri: review.image }}
        style={{
          width: "100%",
          height: 280,
          borderRadius: 20,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />

      {/* Glassmorphism Container */}
      {Platform.OS !== "web" ? (
        <BlurView
          intensity={70}
          tint="dark"
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: cardBackgroundColor,
          }}
        >
          <ReviewDetails review={review} textColor={textColor} subText={subText} />
        </BlurView>
      ) : (
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            padding: 20,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: border,
            backdropFilter: "blur(12px)",
          }}
        >
          <ReviewDetails review={review} textColor={textColor} subText={subText} />
        </View>
      )}
    </ScrollView>
  );
}

function ReviewDetails({
  review,
  textColor,
  subText,
}: {
  review: any;
  textColor: string;
  subText: string;
}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins_700Bold",
          marginBottom: 12,
          color: textColor,
        }}
      >
        {review.title}
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontFamily: "Poppins_400Regular",
          marginBottom: 8,
          color: subText,
          lineHeight: 22,
        }}
      >
        {review.content}
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_500Medium",
          color: subText,
          marginBottom: 10,
        }}
      >
        — {review.author}
      </Text>

      {/* Extra Metadata */}
      <View style={{ marginTop: 16 }}>
        <Info label="Genre" value={review.genre} />
        <Info label="Album" value={review.album} />
        <Info label="Release Date" value={review.releaseDate} />
        <Info label="Duration" value={review.duration} />
        <Info label="Rating" value={`${review.rating} / 5`} />
      </View>
    </View>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ marginBottom: 6 }}>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
          color: "#999",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_600SemiBold",
          color: "#eee",
        }}
      >
        {value}
      </Text>
    </View>
  );
}
