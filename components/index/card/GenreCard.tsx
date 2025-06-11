import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

export type GenreCardProps = {
  name: string;
  image: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  reviewCount?: number;
};

export default function GenreCard({
  name,
  image,
  onPress,
  textColor,
  backgroundColor,
  border,
  reviewCount,
}: GenreCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor,
        borderRadius: 16,
        margin: 8,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        width: 170,
        height: 180,
        borderWidth: 1,
        borderColor: border,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          marginBottom: 10,
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_600SemiBold",
          color: textColor,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          color: textColor,
          marginTop: 4,
        }}
      >
        {reviewCount?.toLocaleString()} reviews
      </Text>
    </TouchableOpacity>
  );
}
