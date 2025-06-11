import trendingItems from "@/components/index/data/trendingItems";
import AlbumRecommendations from "@/components/index/sections/AlbumRecommendations";
import EditorsChoiceSection from "@/components/index/sections/EditorsChoiceSection";
import GenreGrid from "@/components/index/sections/GenreGrid";
import TopReviewsSection from "@/components/index/sections/TopReviewsSection";
import TrendingSection from "@/components/index/sections/TrendingSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
export default function Dashboard() {
  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = trendingItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const jennieAlbums = [
    {
      id: 1,
      title: "You & Me",
      image:
        "https://blackpink.cafe/wp-content/uploads/2023/10/blackpink-231006-jennie-you-and-me-official-photo-1.jpg",
      type: "Single",
      genre: "Pop",
      year: 2023,
    },
    {
      id: 2,
      title: "Solo",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGZkNzM3OWUtMTcyZC00MjY3LTgwNmYtNmU4OWUxNDQ1OTYyXkEyXkFqcGc@._V1_.jpg",
      type: "Single",
      genre: "K-Pop",
      year: 2018,
    },
    {
      id: 3,
      title: "One of the Girls (feat. Lily-Rose Depp, The Weeknd)",
      image: "https://i.scdn.co/image/ab67616d0000b273b0dd6a5cd1dec96c4119c262",
      type: "Soundtrack",
      genre: "R&B / Alt-Pop",
      year: 2023,
    },
    {
      id: 4,
      title: "Seoul City",
      image: "https://i.scdn.co/image/ab67616d0000b2735a43918ea90bf1e44b7bdcfd",
      type: "Single",
      genre: "Pop",
      year: 2024,
    },
    {
      id: 5,
      title: "Damn Right",
      image:
        "https://imgx.sonora.id/crop/0x0:0x0/x/photo/2025/03/07/lirik-lagu-damn-right-jennie-bla-20250307082532.jpg",
      type: "Single",
      genre: "Hip-Hop",
      year: 2024,
    },
  ];
  const editorPicks = [
    {
      id: 1,
      title: "Jennie",
      subtitle: "Viral track ‘Seoul City’ now trending worldwide",
      image: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6",
    },
    {
      id: 2,
      title: "Jennie",
      subtitle: "‘Damn Right’ is climbing global charts fast",
      image: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6",
    },
  ];
  const topReview = {
    title: "“Chase Atlantic Pushes Boundaries Again”",
    content:
      "Chase Atlantic’s latest release is a genre-blending ride through dark pop, R&B, and alternative rock. Their moody production and emotional lyricism hit harder than ever — a sonic high worth repeating.",
    author: "audioghost",
    image: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6",
    rating: 4.8,
  };

  const genres = [
    { id: 1, name: "Pop", image: "https://i.ibb.co/ZYW3VTp/brown-brim.png", reviewCount: 15000 },
    { id: 2, name: "Hip-Hop", image: "https://i.ibb.co/ypkgK0X/blue-beanie.png", reviewCount: 12000 },
    { id: 3, name: "R&B", image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png", reviewCount: 8000 },
    { id: 4, name: "K-Pop", image: "https://i.ibb.co/R70vBrQ/green-beanie.png", reviewCount: 9500 },
  ];

  return (
    <ScrollView>
      <Animatable.View
        animation="fadeInUp"
        duration={600}
        delay={50}
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
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
              fontSize: 25,
              fontFamily: "Poppins_700Bold",
              color: textColor,
            }}
          >
            Feed
          </Text>

          <TouchableOpacity>
            <View style={{ position: "relative" }}>
              <Ionicons name="person-circle-outline" size={34} color={textColor} />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "red",
                  position: "absolute",
                  top: 2,
                  right: 2,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f0f5",
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginBottom: 20,
          }}
        >
          <Ionicons name="search-outline" size={20} color={subText} style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search songs, albums, artists..."
            placeholderTextColor={subText}
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              flex: 1,
              fontSize: 12,
              color: textColor,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>
        <EditorsChoiceSection
          items={editorPicks}
          textColor={textColor}
          subText={subText}
          backgroundColor={backgroundColor}
        />
        <TrendingSection items={filteredItems} textColor={textColor} subText={subText} />
        <GenreGrid
          genres={genres}
          onPressGenre={(genre) => console.log("Tapped:", genre.name)}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
        />
        <TopReviewsSection review={topReview} textColor={textColor} subText={subText} />
        <AlbumRecommendations artistName="Jennie" albums={jennieAlbums} textColor={textColor} subTextColor={subText} />
      </Animatable.View>
    </ScrollView>
  );
}
