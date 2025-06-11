import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import GenreCard from "../card/GenreCard";

type Genre = {
  id: number;
  name: string;
  image: string;
};

type GenreGridProps = {
  genres: Genre[];
  onPressGenre?: (genre: Genre) => void;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
};

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const cardSize = screenWidth / numColumns - 32;

export default function GenreGrid({ genres, onPressGenre, textColor, backgroundColor, border }: GenreGridProps) {
  const renderItem = ({ item }: { item: Genre }) => (
    <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
      <GenreCard
        name={item.name}
        image={item.image}
        onPress={() => onPressGenre?.(item)}
        textColor={textColor}
        backgroundColor={backgroundColor}
        border={border}
      />
    </View>
  );

  return (
    <FlatList
      data={genres}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      scrollEnabled={false}
      contentContainerStyle={{
        paddingBottom: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
