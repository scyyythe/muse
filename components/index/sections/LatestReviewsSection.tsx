import React from "react";
import { FlatList, Text, View } from "react-native";
import LatestReviewCard, { LatestReview } from "../card/LatestReviewCard";

type Props = {
  reviews: LatestReview[];
  textColor?: string;
  backgroundColor?: string;
  border?: string;
};

export default function LatestReviewsSection({ reviews, textColor, backgroundColor, border }: Props) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 10,
          color: textColor ?? "#000",
        }}
      >
        Latest Reviews
      </Text>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LatestReviewCard review={item} textColor={textColor} backgroundColor={backgroundColor} border={border} />
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </View>
  );
}
