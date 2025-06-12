import ExploreCategoryGrid from "@/components/explore/sections/ExploreCategoryGrid";
import ReviewSpotlightSection from "@/components/explore/sections/ReviewSpotlightSection";
import TrendingReviewedAlbumsSection from "@/components/explore/sections/TrendingReviewedAlbumsSection";
import artistCarouselData from "@/components/index/data/index/artistCarouselData";
import { editorPicks } from "@/components/index/data/index/editorsPicks";
import { latestReviews } from "@/components/index/data/index/latestReviews";
import trendingItems from "@/components/index/data/index/trendingItems";
import ArtistCarouselSection from "@/components/index/sections/ArtistCarouselSection";
import EditorsChoiceSection from "@/components/index/sections/EditorsChoiceSection";
import LatestReviewsSection from "@/components/index/sections/LatestReviewsSection";
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
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
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
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Poppins_700Bold",
                color: textColor,
                letterSpacing: 1,
              }}
            >
              M
            </Text>
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: textColor,
                opacity: 0.6,
                marginTop: 2,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              color: textColor,
              opacity: 0.7,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginLeft: 18,
            }}
          >
            Explore
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
        <ExploreCategoryGrid
          textColor={textColor}
          backgroundColor={backgroundColor}
          cardBackgroundColor={cardBackgroundColor}
        />
        <TrendingReviewedAlbumsSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        <ReviewSpotlightSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        <ArtistCarouselSection artists={artistCarouselData} textColor={textColor} />
        <LatestReviewsSection
          reviews={latestReviews}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
        />
        <EditorsChoiceSection
          items={editorPicks}
          textColor={textColor}
          subText={subText}
          backgroundColor={backgroundColor}
          border={border}
        />
      </Animatable.View>
    </ScrollView>
  );
}
