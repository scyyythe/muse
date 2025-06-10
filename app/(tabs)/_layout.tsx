import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabLayout() {
  return (
    <Tabs>
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
