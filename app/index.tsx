import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, Text, View, useWindowDimensions } from "react-native";
import Swiper from "react-native-web-swiper";
export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const subText = useThemeColor({}, "subText");
  const buttonText = useThemeColor({}, "buttonText");
  const button = useThemeColor({}, "button");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Swiper loop={false} controlsEnabled={false} onIndexChanged={(i) => setIndex(i)}>
        <Animated.View
          style={{
            flex: 1,
            width: "100%",
            opacity: fadeAnim,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 24,
              paddingTop: 60,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Top Branding */}
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 60,
                  fontFamily: "Poppins_700Bold",
                  color: buttonText,
                  lineHeight: 70,
                }}
              >
                M
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: buttonText,
                  fontWeight: "bold",
                  lineHeight: 24,
                }}
              >
                ●
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins_700Bold",
                  color: buttonText,
                  letterSpacing: 8,
                  marginTop: 8,
                }}
              >
                M U S E
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
              }}
            >
              <Image
                source={require("../assets/images/index/disc-index.png")}
                resizeMode="contain"
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </View>

            <View style={{ alignItems: "center", marginBottom: 60, padding: 30 }}>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: "Poppins_700Bold",
                  color: buttonText,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Providing The Best Sound
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins_400Regular",
                  color: subText,
                  textAlign: "center",
                  lineHeight: 22,
                  marginBottom: 20,
                }}
              >
                Discover artists, explore albums, and share your voice through reviews.
              </Text>

              <Pressable
                style={{
                  backgroundColor: button,
                  paddingVertical: 12,
                  paddingHorizontal: 28,
                  borderRadius: 32,
                }}
                onPress={() => router.push("/auth/login")}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins_600Regular",
                    color: "white",
                  }}
                >
                  Get Started
                </Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 24,
            opacity: fadeAnim,
          }}
        >
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              top: height * 0.1,
            }}
          >
            <Image
              source={require("../assets/images/index/disc-index.png")}
              style={{ width: 180, height: 180, resizeMode: "contain" }}
            />
          </View>

          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 20,
              marginTop: height * 0.25,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontFamily: "Poppins_700Bold",
                marginBottom: 10,
                textAlign: "center",
                color: buttonText,
              }}
            >
              Getting Started
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
                lineHeight: 24,
                textAlign: "center",
                color: subText,
              }}
            >
              Start discovering your {"\n"} favorite tunes
            </Text>
            <Pressable
              onPress={() => router.push("/auth/login")}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 24,
                borderRadius: 50,
                alignItems: "center",
                marginTop: 20,
                backgroundColor: button,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_400Regular",
                  color: buttonText,
                }}
              >
                Let's Go
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 40,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Poppins_700Bold",
                letterSpacing: 4,
                color: buttonText,
              }}
            >
              MUSE
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_300Regular",
                marginTop: 2,
                color: subText,
              }}
            >
              Music Vibes
            </Text>
          </View>
        </Animated.View>
      </Swiper>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 40,
          gap: 6,
        }}
      >
        {[0, 1].map((i) =>
          index === i ? (
            <View
              key={i}
              style={{
                width: 20,
                height: 4,
                borderRadius: 2,
                backgroundColor: "gray",
              }}
            />
          ) : null
        )}
      </View>
    </View>
  );
}
