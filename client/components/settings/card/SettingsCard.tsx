import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  textColor: string;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
};

export default function SettingsCard({
  title,
  icon,
  onPress,
  textColor,
  isToggle = false,
  toggleValue = false,
  onToggleChange,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isToggle}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 14,
          paddingHorizontal: 12,
          borderBottomWidth: 1,
          borderColor: textColor + "22",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name={icon} size={20} color={textColor} style={{ marginRight: 12 }} />
          <Text style={{ color: textColor, fontSize: 14, fontFamily: "Poppins_500Medium" }}>{title}</Text>
        </View>
        {isToggle && (
          <Switch
            value={toggleValue}
            onValueChange={onToggleChange}
            thumbColor={toggleValue ? textColor : "#888"}
            trackColor={{ false: "#ccc", true: textColor + "55" }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
