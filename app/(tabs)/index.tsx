import trendingItems from "@/components/index/data/trendingItems";
import AlbumRecommendations from "@/components/index/sections/AlbumRecommendations";
import TopReviewsSection from "@/components/index/sections/TopReviewsSection";
import TrendingSection from "@/components/index/sections/TrendingSection";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Dashboard() {
  const textColor = "black";
  const subText = "gray";

  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = trendingItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const theWeekndAlbums = [
    {
      id: 1,
      title: "After Hours",
      image: "https://wallpapers.com/images/hd/the-weeknd-after-hours-3000-x-3000-wallpaper-yocnnl0wdmg9ewo8.jpg",
    },
    {
      id: 2,
      title: "Starboy",
      image: "https://tse3.mm.bing.net/th?id=OIP.BSmyhb0CGW1S-WcdfEFS6gHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      title: "Dawn FM",
      image: "https://tse4.mm.bing.net/th?id=OIP.Pa4GciEbi4Uz5qBJrdfYrQHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      title: "Dawn FM",
      image: "https://tse1.mm.bing.net/th?id=OIP.4uhzA4dmQBwBPLMoKWYZUgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      title: "The Hills",
      image: "https://tse2.mm.bing.net/th?id=OIP.EKRYJ_wyMVobCapG7r4EsAAAAA&pid=Api&P=0&h=220",
    },
  ];

  const topReview = {
    title: "“Lana Del Rey is in Her Element”",
    content:
      "Lana’s latest track blends cinematic melancholy with haunting vocals. It’s a masterclass in mood and emotion—pure Lana at her finest.",
    author: "vinylpoet",
    image: "https://2.bp.blogspot.com/-TT3fH7RHRzk/VoxXzb1OumI/AAAAAAAAB90/WnIKe5dQENw/s1600/Honeymoon+Review.png",
    rating: 5.0,
  };

  return (
       <ScrollView>
    <Animatable.View
      animation="fadeInUp"
      duration={600}
      delay={50}
      style={{
        flex: 1,
        backgroundColor: "white",
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
            <Ionicons
              name="person-circle-outline"
              size={34}
              color={textColor}
            />
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
        <Ionicons
          name="search-outline"
          size={20}
          color={subText}
          style={{ marginRight: 8 }}
        />
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

      <TrendingSection
        items={filteredItems}
        textColor={textColor}
        subText={subText}
      />
      <TopReviewsSection review={topReview} />
      <AlbumRecommendations artistName="The Weekend" albums={theWeekndAlbums} />
      
    </Animatable.View>
      </ScrollView>
  
  );
}
