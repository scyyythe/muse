import { useThemeColor } from "@/hooks/useThemeColor";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

const mockReviews = [
  {
    user: "Jerald Aliviano",
    avatar: "https://i.pravatar.cc/150?img=1",
    comment: "Love this track! 🔥",
    date: "May 21, 2025",
    likes: 4,
  },
  {
    user: "Jai Anuba",
    avatar: "https://i.pravatar.cc/150?img=2",
    comment: "The lyrics really hit me emotionally.",
    date: "June 2, 2025",
    likes: 8,
  },
  {
    user: "James Arpilang",
    avatar: "https://i.pravatar.cc/150?img=3",
    comment: "A perfect blend of beats and emotions.",
    date: "June 10, 2025",
    likes: 5,
  },
  {
    user: "Amara Lopez",
    avatar: "https://i.pravatar.cc/150?img=4",
    comment: "I’ve had this on repeat all day.",
    date: "June 9, 2025",
    likes: 2,
  },
  {
    user: "Carlos Tan",
    avatar: "https://i.pravatar.cc/150?img=5",
    comment: "Beat drop is insane!",
    date: "June 8, 2025",
    likes: 7,
  },
  {
    user: "Mika Reyes",
    avatar: "https://i.pravatar.cc/150?img=6",
    comment: "Solid production, 10/10.",
    date: "June 7, 2025",
    likes: 6,
  },
  {
    user: "Tyrone Cruz",
    avatar: "https://i.pravatar.cc/150?img=7",
    comment: "Not my favorite, but still good.",
    date: "June 6, 2025",
    likes: 1,
  },
  {
    user: "Rhea Dela Cruz",
    avatar: "https://i.pravatar.cc/150?img=8",
    comment: "This should be on the charts.",
    date: "June 5, 2025",
    likes: 9,
  },
  {
    user: "Kenji Morita",
    avatar: "https://i.pravatar.cc/150?img=9",
    comment: "Masterpiece.",
    date: "June 4, 2025",
    likes: 3,
  },
  {
    user: "Angel Canete",
    avatar: "https://i.pravatar.cc/150?img=10",
    comment: "Vocals are insane here!",
    date: "June 3, 2025",
    likes: 5,
  },
];

export default function MusicReviewSection() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  const [reviews, setReviews] = useState(mockReviews);
  const [liked, setLiked] = useState<boolean[]>(mockReviews.map(() => false));
  const [reviewText, setReviewText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleLike = (index: number) => {
    const updatedLiked = [...liked];
    const updatedReviews = [...reviews];

    updatedLiked[index] = !updatedLiked[index];
    updatedReviews[index].likes += updatedLiked[index] ? 1 : -1;

    setLiked(updatedLiked);
    setReviews(updatedReviews);
  };

  return (
    <View style={{ marginTop: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: textColor }}>Reviews by Listeners</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: button,
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>Add</Text>
        </TouchableOpacity>
      </View>

      {reviews.map((review, index) => (
        <View
          key={index}
          style={{
            backgroundColor: cardBackgroundColor,
            padding: 12,
            borderRadius: 16,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: review.avatar }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 12,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: textColor, fontWeight: "600" }}>{review.user}</Text>
            <Text style={{ color: subText, marginTop: 4 }}>{review.comment}</Text>
            <Text style={{ color: subText, fontSize: 12, marginTop: 6 }}>{review.date}</Text>
          </View>
          <TouchableOpacity onPress={() => handleLike(index)} style={{ marginLeft: 10, alignItems: "center" }}>
            <Heart
              size={22}
              color={liked[index] ? "#FF4C4C" : subText}
              fill={liked[index] ? "#FF4C4C" : "transparent"}
            />
            <Text style={{ color: subText, fontSize: 12 }}>{review.likes}</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: cardBackgroundColor,
              padding: 24,
              borderRadius: 20,
              width: "85%",
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 5 },
            }}
          >
            <Text style={{ color: textColor, fontWeight: "700", fontSize: 18, marginBottom: 12 }}>Leave a Review</Text>

            <TextInput
              placeholder="Share your thoughts..."
              placeholderTextColor={subText}
              value={reviewText}
              onChangeText={setReviewText}
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
                borderRadius: 12,
                padding: 12,
                height: 100,
                textAlignVertical: "top",
                borderWidth: 1,
                borderColor: border,
                marginBottom: 16,
              }}
              multiline
            />

            <TouchableOpacity
              onPress={() => {
                if (reviewText.trim()) {
                  const newReview = {
                    user: "Angel Canete",
                    avatar: "https://i.pravatar.cc/150?img=10",
                    comment: reviewText.trim(),
                    date: new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                    likes: 0,
                  };

                  setReviews([newReview, ...reviews]);
                  setLiked([false, ...liked]);
                  setReviewText("");
                  setModalVisible(false);
                }
              }}
              style={{
                backgroundColor: button,
                paddingVertical: 12,
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>Post Review</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 12, alignItems: "center" }}>
              <Text style={{ color: subText, fontSize: 13 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
