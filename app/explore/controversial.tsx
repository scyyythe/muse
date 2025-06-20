import Header from "@/app/header";
import ControversialAlbumsSection from "@/components/index/genres/ControversialAlbumsSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ScrollView, Text } from "react-native";

// Sample controversial albums data
const controversialAlbums = [
  {
    id: 1,
    title: "Yeezus",
    artist: "Kanye West",
    image: "https://i.imgur.com/pSxXU0X.jpg",
    averageRating: 6.8,
    totalReviews: 1050,
    highlight: "Polarizing production and themes sparked intense fan debate.",
  },
  {
    id: 2,
    title: "Reputation",
    artist: "Taylor Swift",
    image: "https://i.imgur.com/KzBF02R.jpg",
    averageRating: 7.0,
    totalReviews: 920,
    highlight: "Swift's sharp image shift divided her longtime audience.",
  },
  {
    id: 3,
    title: "Speedin' Bullet 2 Heaven",
    artist: "Kid Cudi",
    image: "https://i.imgur.com/T4dVkkT.jpg",
    averageRating: 5.5,
    totalReviews: 600,
    highlight: "Experimental grunge departure from hip-hop roots stunned fans.",
  },
  {
    id: 4,
    title: "Chemtrails Over the Country Club",
    artist: "Lana Del Rey",
    image: "https://i.imgur.com/fTOHvcG.jpg",
    averageRating: 7.1,
    totalReviews: 740,
    highlight: "Critics questioned the lyrical content and vintage aesthetics.",
  },
  {
    id: 5,
    title: "Revival",
    artist: "Eminem",
    image: "https://i.imgur.com/JpjM4iK.jpg",
    averageRating: 6.3,
    totalReviews: 890,
    highlight: "Mixed reviews over political lyrics and pop features.",
  },
  {
    id: 6,
    title: "Jesus Is King",
    artist: "Kanye West",
    image: "https://i.imgur.com/oSCnd0A.jpg",
    averageRating: 6.0,
    totalReviews: 960,
    highlight: "Gospel pivot challenged expectations and sparked theological takes.",
  },
  {
    id: 7,
    title: "Man on the Moon III",
    artist: "Kid Cudi",
    image: "https://i.imgur.com/jPtER3g.jpg",
    averageRating: 6.9,
    totalReviews: 700,
    highlight: "Fans conflicted over return to old themes vs growth.",
  },
  {
    id: 8,
    title: "Queen",
    artist: "Nicki Minaj",
    image: "https://i.imgur.com/XNe7VUp.jpg",
    averageRating: 6.7,
    totalReviews: 830,
    highlight: "Feuds and delivery style stirred debate across fandoms.",
  },
  {
    id: 9,
    title: "Testimony",
    artist: "August Alsina",
    image: "https://i.imgur.com/n4uqRwB.jpg",
    averageRating: 7.0,
    totalReviews: 650,
    highlight: "Raw honesty in lyrics received mixed emotional reactions.",
  },
  {
    id: 10,
    title: "Born This Way",
    artist: "Lady Gaga",
    image: "https://i.imgur.com/1IQwvlO.jpg",
    averageRating: 8.1,
    totalReviews: 1100,
    highlight: "Religious and LGBTQ+ themes drew both praise and backlash.",
  },
];

export default function ControversialScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Header title="Controversial Albums" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Albums That Stirred Discussion
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginBottom: 20,
        }}
      >
        These albums sparked debate and strong opinions—whether for breaking boundaries or taking unexpected turns.
      </Text>

      <ControversialAlbumsSection albums={controversialAlbums} layout="grid" />
    </ScrollView>
  );
}
