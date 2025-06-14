import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type Review = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  likes: number;
};

type Props = {
  reviews: Review[];
  onPressReview?: (review: Review) => void;
};

export default function GenreRecentReviews({ reviews, onPressReview }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const renderItem = ({ item }: { item: Review }) => (
    <TouchableOpacity
      onPress={() => onPressReview?.(item)}
      style={{
        flexDirection: "row",
        padding: 12,
        backgroundColor: cardBackgroundColor,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: item.user.avatar }} style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />

      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14, color: textColor }}>
          {item.user.name} • {item.rating.toFixed(1)}★
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontFamily: "Poppins_400Regular", fontSize: 13, color: subText, marginTop: 4 }}
        >
          {item.text}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            color: subText,
            marginTop: 6,
          }}
        >
          ❤️ {item.likes} Likes
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, color: textColor, marginBottom: 12 }}>
        📝 Recent Reviews
      </Text>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
}
