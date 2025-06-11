import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Dashboard() {
  const textColor = "black";
  const subText = "gray";

const trendingItems = [
  {
    id: 1,
    title: "Die For You",
    type: "Album",
    image: "https://tse1.mm.bing.net/th?id=OIP.7K4rCpi6sd6VFnbbGd9YcgHaHa&pid=Api&P=0&h=220",
    rating: "★ 4.5",
  },
  {
    id: 2,
    title: "Bored",
    type: "Track",
    image: "https://tse3.mm.bing.net/th?id=OIP.Nayqeewuld0--g5YGoRZcAHaHa&pid=Api&P=0&h=220",
    rating: "★ 4.2",
  },
  {
    id: 3,
    title: "Ikigai",
    type: "Recently Reviewed",
    image: "https://a10.gaanacdn.com/images/albums/87/6348987/crop_480x480_6348987.jpg",
    rating: "★ 4.8",
  },
    {
    id: 3,
    title: "Jazz Stories",
    type: "Recently Reviewed",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=100&q=80",
    rating: "★ 4.8",
  },
    {
    id: 4,
    title: "Seoul City",
    type: "Recently Reviewed",
    image: "https://images.genius.com/28f3f303c54e8f1a3bfb81e9b992d8cf.1000x1000x1.png",
    rating: "★ 4.8",
  },
  {
    id: 5,
    title: "Fishtail",
    type: "Recently Reviewed",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=100&q=80",
    rating: "★ 4.8",
  },
];


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
          style={{
            flex: 1,
            fontSize: 12,
            color: textColor,
            fontFamily: "Poppins_400Regular",
          }}
        />
      </View>

      {/* Trending Music Section */}
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 12,
          color: textColor,
        }}
      >
        Trending Music
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trendingItems.map((item) => (
          <View
            key={item.id}
            style={{
              marginRight: 16,
              width: 120,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                marginBottom: 8,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
              }}
              numberOfLines={1}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: subText,
                fontFamily: "Poppins_400Regular",
              }}
            >
              {item.rating}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
