import { latestReviews } from "@/components/data/index/latestReviews";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function ReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = latestReviews.find((r) => r.id === id);

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{review.title}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{review.comment}</Text>
      <Text style={{ color: "#666" }}>By {review.user}</Text>
    </ScrollView>
  );
}
