import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";

type Album = {
  id: number;
  title: string;
  image: string;
};

type AlbumRecommendationsProps = {
  artistName: string;
  albums: Album[];
  textColor?: string;
  subText?: string;
};

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.6;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

export default function AlbumRecommendations({
  artistName,
  albums,
  textColor = "black",
  subText = "gray",
}: AlbumRecommendationsProps) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % albums.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, albums.length]);

  return (
    <View style={{ marginTop: 24 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 12,
          color: textColor,
        }}
      >
        Recommended Albums by {artistName}
      </Text>

      <Animated.FlatList
        ref={flatListRef}
        data={albums}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                transform: [{ scale }],
                opacity,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 16,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins_600SemiBold",
                  color: textColor,
                  textAlign: "center",
                }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
