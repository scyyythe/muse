import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import React from "react";
import { View, ViewStyle } from "react-native";

export default function TabLayout() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#7f5af0",
        tabBarInactiveTintColor: textColor,
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
        },
        tabBarStyle: {
          backgroundColor: backgroundColor,
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopWidth: 0.3,
          borderTopColor: "#ccc",
        } as ViewStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                marginBottom: 5,
                borderRadius: 12,
              }}
            >
              <IconSymbol size={focused ? 22 : 20} name="house.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 22 : 20} name="paperplane.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "My Reviews",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 22 : 20} name="text.bubble.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 22 : 20} name="gearshape.fill" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
