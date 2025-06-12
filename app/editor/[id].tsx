import { editorPicks } from "@/components/data/index/editorsPicks";
import EditorsChoiceCard from "@/components/index/card/EditorsChoiceCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../header";
export default function EditorDetailScreen() {
  const { id } = useLocalSearchParams();
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");
  const accent = useThemeColor({}, "tint");
  const button = useThemeColor({}, "button");
  const editorItem = editorPicks.find((item) => item.id.toString() === id);
  const [comment, setComment] = useState("");
  const [likedComments, setLikedComments] = useState<{ [key: number]: boolean }>({});

  const sampleComments = [
    { id: 1, user: "melody_lover", text: "This track gave me chills. One of SZA's best!" },
    { id: 2, user: "beats_by_j", text: "The minimal production makes her vocals shine." },
    { id: 3, user: "souljunkie", text: "SZA really knows how to hit the feels." },
  ];
  const toggleLike = (id: number) => {
    setLikedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  if (!editorItem) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor }}>
        <Text style={{ color: textColor, fontSize: 18 }}>Editor's Pick not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor }} contentContainerStyle={{ paddingTop: 70, padding: 20 }}>
      <Header title="Editor's Choice" textColor={textColor} />

      <Image
        source={{ uri: editorItem.image }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 16,
          marginBottom: 16,
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 22, fontFamily: "Poppins_700Bold", color: textColor }}>{editorItem.title}</Text>

      <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular", color: subText, marginTop: 6 }}>
        {editorItem.subtitle}
      </Text>

      {/* Details */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <Text style={{ color: subText, fontSize: 14 }}>
          Songs by Artist: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.songsByArtist}</Text>
        </Text>
        <Text style={{ color: subText, fontSize: 14, marginTop: 4 }}>
          Reviews: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.reviews}</Text>
        </Text>
        <Text style={{ color: subText, fontSize: 14, marginTop: 4 }}>
          Average Rating: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.rating} ★</Text>
        </Text>
        <Text style={{ marginTop: 12, color: subText, fontSize: 14, lineHeight: 20 }}>
          <Text style={{ fontWeight: "bold", color: textColor }}>Editor's Note:</Text> {editorItem.editorNote}
        </Text>
      </View>

      {/* See More Navigation Text */}
      <TouchableOpacity onPress={() => router.push("/display/editors-picks/index")} style={{ marginBottom: 12 }}>
        <Text style={{ color: accent, fontSize: 14, fontFamily: "Poppins_500Medium" }}>See More Picks →</Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {editorPicks
          .filter((item) => item.id.toString() !== id)
          .slice(0, 2)
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

      {/* Comments Section */}
      <View style={{ marginTop: 32 }}>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_600SemiBold", color: textColor, marginBottom: 12 }}>
          Listener Comments
        </Text>
        {sampleComments.map((c) => (
          <View
            key={c.id}
            style={{
              backgroundColor: cardBackgroundColor,
              borderRadius: 12,
              padding: 12,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ fontWeight: "600", color: textColor, marginBottom: 4 }}>{c.user}</Text>
              <Text style={{ color: subText, lineHeight: 20 }}>{c.text}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleLike(c.id)}>
              <Ionicons
                name={likedComments[c.id] ? "heart" : "heart-outline"}
                size={20}
                color={likedComments[c.id] ? "red" : subText}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {/* Leave a Comment */}
      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <Text style={{ fontSize: 16, color: textColor, marginBottom: 8 }}>Leave a Comment</Text>
        <TextInput
          placeholder="Write something..."
          placeholderTextColor={subText}
          value={comment}
          onChangeText={setComment}
          multiline
          style={{
            backgroundColor: cardBackgroundColor,
            borderColor: border,
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            fontSize: 14,
            color: textColor,
            minHeight: 80,
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: button,
            paddingVertical: 12,
            borderRadius: 20,
            marginTop: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>Post Comment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
