import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
type EditorsChoiceCardProps = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  textColor?: string;
  subText?: string;
  backgroundColor?: string;
  border?: string;
};

export default function EditorsChoiceCard({
  id,
  title,
  subtitle,
  image,
  textColor,
  subText,
  border,
  backgroundColor,
}: EditorsChoiceCardProps) {
  const goToDetail = () => {
    router.push({
      pathname: "/editor/[id]",
      params: { id: id.toString() },
    });
  };
  return (
    <Pressable onPress={goToDetail}>
      <View
        style={{
          width: 178,
          marginRight: 17,
          borderRadius: 16,
          backgroundColor: backgroundColor,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 4,
          borderWidth: 1,
          borderColor: border,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 120,
          }}
          resizeMode="cover"
        />
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_700Bold",
              color: textColor,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_400Regular",
              color: subText,
              marginTop: 4,
            }}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
