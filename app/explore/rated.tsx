import Header from "@/app/header";
import TrendingReviewedAlbumCard from "@/components/explore/card/TrendingReviewedAlbumCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, Text, View } from "react-native";

const topRatedAlbums = [
  {
    id: 1,
    title: "Blonde",
    image: "https://i.imgur.com/f1pX1aF.jpg",
    rating: "9.5",
    artist: "Frank Ocean",
    reviewCount: 320,
    genre: "R&B",
  },
  {
    id: 2,
    title: "1989 (Taylor's Version)",
    image: "https://i.imgur.com/KzBF02R.jpg",
    rating: "9.2",
    artist: "Taylor Swift",
    reviewCount: 410,
    genre: "Pop",
  },
  {
    id: 3,
    title: "To Pimp a Butterfly",
    image: "https://i.imgur.com/qZ3YrPz.jpg",
    rating: "9.8",
    artist: "Kendrick Lamar",
    reviewCount: 390,
    genre: "Hip-Hop",
  },
  {
    id: 4,
    title: "Random Access Memories",
    image: "https://i.imgur.com/hWjBtHd.jpg",
    rating: "9.0",
    artist: "Daft Punk",
    reviewCount: 290,
    genre: "Electronic",
  },
  {
    id: 5,
    title: "In Rainbows",
    image: "https://i.imgur.com/DHgI6hA.jpg",
    rating: "9.3",
    artist: "Radiohead",
    reviewCount: 370,
    genre: "Alternative",
  },
  {
    id: 6,
    title: "Lemonade",
    image: "https://i.imgur.com/Zo7tAqf.jpg",
    rating: "9.4",
    artist: "Beyoncé",
    reviewCount: 345,
    genre: "Pop",
  },
  {
    id: 7,
    title: "DAMN.",
    image: "https://i.imgur.com/xR2swId.jpg",
    rating: "9.1",
    artist: "Kendrick Lamar",
    reviewCount: 280,
    genre: "Hip-Hop",
  },
  {
    id: 8,
    title: "Melodrama",
    image: "https://i.imgur.com/Z9Rmqha.jpg",
    rating: "9.2",
    artist: "Lorde",
    reviewCount: 330,
    genre: "Pop",
  },
  {
    id: 9,
    title: "Good Kid, M.A.A.D City",
    image: "https://i.imgur.com/Sqf07nF.jpg",
    rating: "9.7",
    artist: "Kendrick Lamar",
    reviewCount: 410,
    genre: "Hip-Hop",
  },
  {
    id: 10,
    title: "Norman F***ing Rockwell!",
    image: "https://i.imgur.com/yO5qgkn.jpg",
    rating: "9.3",
    artist: "Lana Del Rey",
    reviewCount: 290,
    genre: "Indie",
  },
];

export default function TopRatedScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Header title="Top Rated Albums" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Discover Critically Acclaimed Albums
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#888",
          fontFamily: "Poppins_400Regular",
          marginBottom: 20,
        }}
      >
        Explore the highest-rated albums according to our user community. These picks showcase outstanding artistry,
        lyrics, and production across genres.
      </Text>

      <FlatList
        data={topRatedAlbums}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TrendingReviewedAlbumCard {...item} textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        )}
      />
    </View>
  );
}
