import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import React from "react";
import { ViewStyle } from "react-native";

export default function TabLayout() {
  const textColor = useThemeColor({}, "text");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#7f5af0",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: "#fff",
          borderRadius: 20,
          height: 70,
          paddingBottom: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.1,
          shadowRadius:10,
        } as ViewStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "My Reviews",
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="text.bubble.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <IconSymbol size={20} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
