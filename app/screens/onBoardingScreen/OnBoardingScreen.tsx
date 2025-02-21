import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "@trendui/react-native/src/components";
import LeadTunes from "@/assets/svg/leadTunes";
import { StatusBar } from "expo-status-bar";
import OnBoardingCharacter from "./onboarding-character";
import LeadTuneLogo from "@/assets/svg/leadtuneLogo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="light" />

      {/* Background Image */}
      <OnBoardingCharacter />

      {/* Leadtunes Logo */}
      <LeadTuneLogo style={{ marginTop: 100 }} />

      <View className="absolute z-10 top-[420px]">
        <Text
          theme="dark"
          variant="title"
          style={{ fontFamily: "SatoshiBoldItalic", margin: "auto" }}
        >
          Enjoy Listening To Your Audio
        </Text>
        <Text
          theme="dark"
          variant="label"
          size={14}
          style={{ fontFamily: "SathoshiMedium" }}
          className="text-center px-7 text-[#797979] mb-3 leading-7"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit
          deserunt voluptatibus repudiandae velit nostrum ipsa,
        </Text>
        <Button
          value="Get Started"
          // onPress={() => console.log("Redirect")}
          onPress={() => router.push("/(tabs)/music")}
          variant="primary"
          textStyle={{ fontSize: 24, fontFamily: "SathoshiBold" }}
          className="mx-10 h-[75px] rounded-3xl my-8"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
