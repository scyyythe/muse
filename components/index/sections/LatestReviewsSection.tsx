import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LatestReviewCard, { LatestReview } from "../card/LatestReviewCard";
type Props = {
  reviews: LatestReview[];
  textColor?: string;
  backgroundColor?: string;
};

export default function LatestReviewsSection({ reviews, textColor, backgroundColor }: Props) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", marginBottom: 10, color: textColor }}>
        Latest Reviews
      </Text>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LatestReviewCard review={item} />}
        scrollEnabled={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
});
