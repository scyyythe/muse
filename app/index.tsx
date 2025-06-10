import { LoginScreenNavigationProp } from "@/types/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-web-swiper";

export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<LoginScreenNavigationProp>();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#111827", "#1f2937", "#0f172a"]} style={{ flex: 1 }}>
        <Swiper loop={false} controlsEnabled={false} onIndexChanged={(i) => setIndex(i)}>
          <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Welcome to Muse</Text>
              <Text style={styles.description}>
                Discover artists, explore songs, and leave your thoughts through reviews.
              </Text>
            </View>
          </Animated.View>

          <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
            <Image source={require("../assets/images/splash-icon.png")} style={styles.image} />

            <Text style={styles.titleCenter}>Getting Started</Text>
            <Text style={styles.descriptionCenter}>Start discovering your {"\n"} favorite tunes</Text>

            <Pressable onPress={() => router.push("/auth/login")} style={styles.button}>
              <Text style={styles.buttonText}>Let's Go</Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.logo}>MUSE</Text>
              <Text style={styles.subLogo}>Music Vibes</Text>
            </View>
          </Animated.View>
        </Swiper>

        <View style={styles.indicatorWrapper}>
          {[0, 1].map((i) => (
            <View key={i} style={[styles.indicatorLine, index === i ? styles.active : styles.inactive]} />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  upperContainer: {
    borderStyle: "solid",
    borderColor: "#ccc",
    textAlign: "center",
    width: "100%",
  },
  indicatorWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 70,
    gap: 6,
  },
  textContainer: {
    alignSelf: "flex-start",
    padding: 20,
    position: "absolute",
    bottom: 50,
  },
  title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    color: "#ffffff",
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "left",
    lineHeight: 25,
    alignSelf: "flex-start",
    color: "#94a3b8",
  },
  titleCenter: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    textAlign: "center",

    color: "#ffffff",
  },
  descriptionCenter: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 25,

    color: "#94a3b8",
  },
  signWith: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: "gray",
    textAlign: "center",
  },
  indicatorLine: {
    width: 8,
    height: 4,
    borderRadius: 2,
    transitionProperty: "width, background-color",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  active: {
    width: 20,
    backgroundColor: "gray",
  },

  inactive: {
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "#7f5af0",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },

  footer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
    width: "100%",
  },

  logo: {
    fontSize: 25,
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 4,
  },

  subLogo: {
    fontSize: 12,
    color: "#94a3b8",
    fontFamily: "Poppins_300Regular",
    marginTop: 2,
  },
});
