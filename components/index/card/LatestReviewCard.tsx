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
  textColor?: string;
  backgroundColor?: string;
  border?: string;
};

export default function LatestReviewCard({ review, textColor, backgroundColor, border }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor ?? "#fff",
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,

        borderWidth: 1,
        borderColor: border,
      }}
    >
      <Image
        source={{ uri: review.albumCover }}
        style={{
          width: 100,
          height: 110,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      />

      <View style={{ flex: 1, padding: 12, justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 14,
            marginBottom: 4,
            color: textColor ?? "#000",
          }}
          numberOfLines={1}
        >
          {review.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
          <Ionicons name="star" size={14} color={textColor} />
          <Text
            style={{
              marginLeft: 4,
              fontSize: 12,
              color: textColor ?? "#444",
              fontFamily: "Poppins_500Medium",
            }}
          >
            {review.rating.toFixed(1)}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: textColor ?? "#444",
            fontFamily: "Poppins_400Regular",
          }}
          numberOfLines={2}
        >
          “{review.comment}”
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: textColor ?? "#666",
            fontFamily: "Poppins_400Regular",
            marginTop: 6,
          }}
        >
          — {review.user}
        </Text>
      </View>
    </View>
  );
}
