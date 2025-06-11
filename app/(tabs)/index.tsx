import trendingItems from "@/components/index/data/trendingItems";
import TrendingSection from "@/components/index/TrendingSection";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
export default function Dashboard() {
  const textColor = "black";
  const subText = "gray";

  const [searchQuery, setSearchQuery] = useState("");


  const filteredItems = trendingItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      {/* Header */}
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

<TrendingSection items={filteredItems} textColor={textColor} subText={subText} />

    </View>
  );
}
