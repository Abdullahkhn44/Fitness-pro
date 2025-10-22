import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function SettingsScreen() {
  const menuItems = [
    { icon: "person-outline", text: "Profile", color: "#38bdf8" },
    { icon: "color-palette-outline", text: "Theme", color: "#8b5cf6" },
    { icon: "notifications-outline", text: "Notifications", color: "#10b981" },
    { icon: "heart-outline", text: "Favorites", color: "#f43f5e" },
    { icon: "information-circle-outline", text: "About App", color: "#f59e0b" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.Text
        entering={FadeInDown.duration(600)}
        style={styles.mainHeading}
      >
        App Settings
      </Animated.Text>

      {menuItems.map((item, index) => (
        <Animated.View
          key={index}
          entering={FadeInDown.delay(index * 100)}
          style={styles.optionCard}
        >
          <View style={styles.row}>
            <Ionicons name={item.icon} size={22} color={item.color} />
            <Text style={styles.optionText}>{item.text}</Text>
            <Feather name="chevron-right" size={22} color="#9ca3af" />
          </View>
        </Animated.View>
      ))}

      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="logout" size={22} color="#ef4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>v1.0.0 - Showcase Build</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030712",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  mainHeading: {
    color: "white",
    fontSize: 23,
    fontWeight: "400",
    marginBottom: 25,
  },
  optionCard: {
    backgroundColor: "#111827",
    borderRadius: 15,
    marginBottom: 12,
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 17,
    fontWeight: "400",
    flex: 1,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2937",
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 15,
    marginTop: 30,
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 15,
  },
  footerText: {
    textAlign: "center",
    color: "#9ca3af",
    marginTop: 30,
    fontSize: 13,
  },
});
