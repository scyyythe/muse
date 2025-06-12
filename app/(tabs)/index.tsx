import { jennieAlbums } from "@/components/index/data/index/albums";
import { editorPicks } from "@/components/index/data/index/editorsPicks";
import { genres } from "@/components/index/data/index/genres";
import { latestReviews } from "@/components/index/data/index/latestReviews";
import { topReviews } from "@/components/index/data/index/topReviews";
import trendingItems from "@/components/index/data/index/trendingItems";
import AlbumRecommendations from "@/components/index/sections/AlbumRecommendations";
import EditorsChoiceSection from "@/components/index/sections/EditorsChoiceSection";
import GenreGrid from "@/components/index/sections/GenreGrid";
import LatestReviewsSection from "@/components/index/sections/LatestReviewsSection";
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
          paddingBottom: 100,
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
          border={border}
        />
        <TrendingSection items={filteredItems} textColor={textColor} subText={subText} />
        <GenreGrid
          genres={genres}
          onPressGenre={(genre) => console.log("Tapped:", genre.name)}
          onPressViewAll={() => console.log("Navigate to full genre list")}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
          subText={subText}
        />

        <TopReviewsSection review={topReviews} textColor={textColor} subText={subText} />
        <LatestReviewsSection
          reviews={latestReviews}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
        />
        <AlbumRecommendations artistName="Jennie" albums={jennieAlbums} textColor={textColor} subTextColor={subText} />
      </Animatable.View>
    </ScrollView>
  );
}
