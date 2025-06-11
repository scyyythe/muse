import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, Text, View } from "react-native";

type TopReview = {
  title: string;
  content: string;
  author?: string;
  image: string;
  rating?: number;
};

type TopReviewsSectionProps = {
  review: TopReview;
  textColor?: string;

  subText?: string;
};

export default function TopReviewsSection({ review, textColor }: TopReviewsSectionProps) {
  return (
    <View style={{ marginTop: 0 }}>
      <View
        style={{
          marginTop: 0,
          marginBottom: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            color: textColor,
          }}
        >
          Highlights
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins_500Medium",
            color: textColor,
          }}
        >
          See all
        </Text>
      </View>

      <View style={{ borderRadius: 16, overflow: "hidden" }}>
        <Image
          source={{ uri: review.image }}
          style={{
            width: "100%",
            height: 400,
            resizeMode: "cover",
          }}
        />

        <BlurView
          intensity={60}
          tint="dark"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 14,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {review.rating !== undefined && (
            <View
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins_600SemiBold",
                  color: "white",
                  marginRight: 4,
                }}
              >
                {review.rating.toFixed(1)}
              </Text>
              <Ionicons name="star" size={14} color="white" />
            </View>
          )}

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_700Bold",
              color: "#f8f8f8",
              marginBottom: 6,
            }}
          >
            {review.title}
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_400Regular",
              color: "#dddddd",
              marginBottom: review.author ? 6 : 0,
              lineHeight: 20,
            }}
            numberOfLines={3}
          >
            {review.content}
          </Text>

          {review.author && (
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_500Medium",
                color: "#bbb",
              }}
            >
              — {review.author}
            </Text>
          )}
        </BlurView>
      </View>
    </View>
  );
}
