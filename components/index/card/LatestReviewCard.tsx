import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export type LatestReview = {
  id: string;
  user: string;
  title: string;
  albumCover: string;
  rating: number;
  comment: string;
  subText?: string;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
};

type Props = {
  review: LatestReview;
};

export default function LatestReviewCard({ review }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: review.backgroundColor,
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 4,
        marginBottom: 16,
      }}
    >
      <Image
        source={{ uri: review.albumCover }}
        style={{ width: 80, height: 80, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
      />

      <View style={{ flex: 1, padding: 12, justifyContent: "space-between" }}>
        <Text
          style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14, marginBottom: 4, color: review.textColor }}
          numberOfLines={1}
        >
          {review.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
          <Ionicons name="star" size={14} color="#facc15" />
          <Text style={{ marginLeft: 4, fontSize: 12, color: review.textColor, fontFamily: "Poppins_500Medium" }}>
            {review.rating.toFixed(1)}
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: review.textColor, fontFamily: "Poppins_400Regular" }} numberOfLines={2}>
          “{review.comment}”
        </Text>
        <Text style={{ fontSize: 11, color: review.textColor, fontFamily: "Poppins_400Regular", marginTop: 6 }}>
          — {review.user}
        </Text>
      </View>
    </View>
  );
}
