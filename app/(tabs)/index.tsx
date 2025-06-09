import { Button } from "@react-navigation/elements";
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

        <View style={styles.page}>
          <Text style={styles.title}>Join Us</Text>
          <Text style={styles.description}>Log in or register now to start your musical journey with Muse.</Text>

          <View style={styles.buttonContainer}>
            <Button variant="filled" color="black">
              Create an account
            </Button>
            <View style={styles.IconsContainer}>
              <Text style={styles.signWith}> or sign in with </Text>
              <View style={styles.socialContainer}>
                <Image source={require("@/assets/icons/gmail.png")} style={styles.socialIcon} />
                <Image source={require("@/assets/icons/facebook.png")} style={styles.socialIcon} />
                <Image source={require("@/assets/icons/apple.png")} style={styles.socialIcon} />
              </View>
            </View>

            <Text style={styles.signInPrompt}>
              Already have an account?{" "}
              <Text style={styles.signInLink} onPress={() => console.log("Navigate to login")}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </Swiper>

      <View style={styles.indicatorWrapper}>
        {[0, 1, 2].map((i) => (
          <View key={i} style={[styles.indicatorLine, index === i ? styles.active : styles.inactive]} />
        ))}
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
    gap: 6,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 50,
  },
  title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "left",
    lineHeight: 25,
    alignSelf: "flex-start",
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
  registerButton: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 6,
  },

  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    gap: 10,
    fontFamily: "Poppins_700Bold",
  },
  signInPrompt: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: "#555",
    marginTop: 10,
  },

  signInLink: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#007AFF",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  IconsContainer: {
    marginTop: 20,
  },
});
