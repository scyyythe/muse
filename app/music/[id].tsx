import trendingItems from "@/components/index/data/index/trendingItems";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");

export default function MusicDetailPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = trendingItems.find((item) => item.id === Number(id));

  const textColor = "black";
  const subText = "gray";

  if (!item) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ color: textColor }}>Music not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} contentContainerStyle={{ padding: 20 }}>
      <Animatable.View animation="fadeInUp" duration={500} delay={50}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color={textColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-vertical" size={20} color={textColor} />
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: item.image }}
          style={{
            width: width * 0.5,
            height: width * 0.5,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 24,
          }}
        />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: 4,
            color: textColor,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            color: subText,
            marginBottom: 12,
          }}
        >
          {item.type} • {item.genre} • {item.year}
        </Text>

        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 6,
              color: textColor,
            }}
          >
            Artist
          </Text>
          <Text style={{ color: subText }}>{item.artist}</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 6,
              color: textColor,
            }}
          >
            Description
          </Text>
          <Text style={{ color: subText }}>{item.description}</Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}
