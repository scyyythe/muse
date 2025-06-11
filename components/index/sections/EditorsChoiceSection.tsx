import React from "react";
import { ScrollView, Text, View } from "react-native";
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
  backgroundColor?: string;
  title?: string;
  onSeeAllPress?: () => void;
};

export default function EditorsChoiceSection({
  items,
  textColor,
  subText,
  backgroundColor,
  title = "Editor's Choice",
  onSeeAllPress,
}: EditorsChoiceSectionProps) {
  return (
    <View style={{ marginVertical: 10 }}>
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

        <Text
          style={{
            fontSize: 13,
            fontFamily: "Poppins_500Medium",
            color: subText,
          }}
        >
          See All
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <EditorsChoiceCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            textColor={textColor}
            subText={subText}
            backgroundColor={backgroundColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}
