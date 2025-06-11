import React from "react";
import { Image, Text, View } from "react-native";

type TopReview = {
  title: string;
  content: string;
  author?: string;
  image: string;
};

type TopReviewsSectionProps = {
  review: TopReview;
  textColor?: string;
  subText?: string;
};

export default function TopReviewsSection({
  review,
  textColor = "black",
  subText = "gray",
}: TopReviewsSectionProps) {
  return (
    <View style={{ marginTop: 24 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 12,
          color: textColor,
        }}
      >
        Top Review Today
      </Text>

      <View
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: 16,
          overflow: "hidden",
          elevation: 2,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        }}
      >
        <Image
          source={{ uri: review.image }}
          style={{
            width: "100%",
            height: 180,
            resizeMode: "cover",
          }}
        />
        <View style={{ padding: 12 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_700Bold",
              color: textColor,
              marginBottom: 4,
            }}
          >
            {review.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_400Regular",
              color: subText,
              marginBottom: review.author ? 6 : 0,
              lineHeight:20
            }}
          >
            {review.content}
          </Text>
          {review.author && (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_500Medium",
                color: "#888",
              }}
            >
              — {review.author}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
