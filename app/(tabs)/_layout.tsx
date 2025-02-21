import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
// import BottomPlayer from "@/components/music/bottomPlayer";

export default function AppTabs() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#42c83c",
          tabBarInactiveTintColor: "#f9f9f9",
          tabBarStyle: {
            position: "absolute",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopWidth: 0,
            paddingTop: 8,
          },
          tabBarBackground: () => (
            <BlurView
              intensity={85}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="music"
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialIcons name="queue-music" size={28} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="playlist"
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialIcons name="playlist-add" size={28} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="liked"
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="heart" size={28} color={color} />;
            },
          }}
        />
      </Tabs>
      {/* <BottomPlayer /> */}
          
    </>
  );
}
