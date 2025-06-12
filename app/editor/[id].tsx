import EditorsChoiceCard from "@/components/index/card/EditorsChoiceCard";
import { editorPicks } from "@/components/index/data/index/editorsPicks";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function EditorDetailScreen() {
  const { id } = useLocalSearchParams();
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");

  const editorItem = editorPicks.find((item) => item.id.toString() === id);

  const relatedSza = editorPicks.filter((item) => item.title === "SZA" && item.id.toString() !== id);

  if (!editorItem) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor }}>
        <Text style={{ color: textColor, fontSize: 18 }}>Editor's Pick not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor }} contentContainerStyle={{ padding: 20 }}>
      <Image
        source={{ uri: editorItem.image }}
        style={{ width: "100%", height: 200, borderRadius: 16, marginBottom: 16 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 22, fontFamily: "Poppins_700Bold", color: textColor }}>{editorItem.title}</Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginTop: 6,
          marginBottom: 24,
        }}
      >
        {editorItem.subtitle}
      </Text>

      <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 12 }}>See More</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {editorPicks
          .filter((item) => item.id.toString() !== id)
          .map((item) => (
            <EditorsChoiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              textColor={textColor}
              subText={subText}
              backgroundColor={cardBackgroundColor}
              border={border}
            />
          ))}
      </ScrollView>

      {relatedSza.length > 0 && (
        <>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_700Bold",
              color: textColor,
              marginTop: 30,
              marginBottom: 12,
            }}
          >
            Related by SZA
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {relatedSza.map((item) => (
              <EditorsChoiceCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                textColor={textColor}
                subText={subText}
                backgroundColor={cardBackgroundColor}
                border={border}
              />
            ))}
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
}
