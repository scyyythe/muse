import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import EditorsChoiceCard from "../card/EditorsChoiceCard";
type EditorsChoiceItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

type EditorsChoiceSectionProps = {
  items: EditorsChoiceItem[];
  textColor?: string;
  subText?: string;
  border?: string;
  backgroundColor?: string;
  title?: string;
  onSeeAllPress?: () => void;
};

export default function EditorsChoiceSection({
  items,
  textColor,
  subText,
  border,
  backgroundColor,
  title = "Editor's Choice",
  onSeeAllPress,
}: EditorsChoiceSectionProps) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            color: textColor,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={() => router.push("/display/editors-picks")} style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Poppins_500Medium",
              color: subText,
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.slice(0, 2).map((item) => (
          <EditorsChoiceCard
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            textColor={textColor}
            subText={subText}
            backgroundColor={backgroundColor}
            border={border}
          />
        ))}
      </ScrollView>
    </View>
  );
}
