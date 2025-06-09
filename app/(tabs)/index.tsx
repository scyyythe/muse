import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-web-swiper";

export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Swiper loop={false} controlsEnabled={false} onIndexChanged={(i) => setIndex(i)}>
        <View style={styles.page}>
          <Image source={require("@/assets/images/splash-icon.png")} style={styles.image} resizeMode="contain" />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Muse</Text>
            <Text style={styles.description}>
              Discover artists, explore songs, and leave your thoughts through reviews.
            </Text>
          </View>
        </View>

        <View style={styles.page}>
          <Text style={styles.title}>Ready to explore?</Text>
          <Text style={styles.description}>Swipe through and start discovering your favorite tunes.</Text>
        </View>
      </Swiper>

      <View style={styles.indicatorWrapper}>
        <View style={[styles.indicatorLine, index === 0 ? styles.active : styles.inactive]} />
        <View style={[styles.indicatorLine, index === 1 ? styles.active : styles.inactive]} />
      </View>
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
    marginBottom: 40,
  },

  indicatorWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 70,
    gap: 10,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
    textAlign: "left",
    lineHeight: 25,
    alignSelf: "flex-start",
  },
  indicatorLine: {
    width: 10,
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
});
