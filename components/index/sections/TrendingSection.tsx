import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

type TrendingItem = {
  id: number;
  title: string;
  type: string;
  image: string;
  rating: string;
};

type TrendingSectionProps = {
  items: TrendingItem[];
  textColor?: string;
  subText?: string;
  title?: string;
};

export default function TrendingSection({
  items,
  textColor = "black",
  subText = "gray",
  title = "Trending Music",
}: TrendingSectionProps) {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 12,
          color: textColor,
        }}
      >
        {title}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View
            key={item.id}
            style={{
              marginRight: 16,
              width: 120,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                marginBottom: 8,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
              }}
              numberOfLines={1}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: subText,
                fontFamily: "Poppins_400Regular",
              }}
            >
              {item.rating}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
