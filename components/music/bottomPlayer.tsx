import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Text } from "@/trendui";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import TrackPlayer, { Event, State } from "react-native-track-player";
import { router } from "expo-router";

export default function BottomPlayer({
  hideMarginBottom,
}: {
  hideMarginBottom?: boolean;
}) {
  const { currentTrack, togglePlayback, playNextTrack, isPlaying } =
    useMusicPlayer();

  return (
    <Pressable
      className="absolute bg-[#252525] flex-row items-center p-[12px] rounded-2xl shadow"
      style={{
        shadowOffset: { width: 0, height: -2 },
        bottom: hideMarginBottom ? 25 : 85,
        display: currentTrack ? "flex" : "none",
        left: 8,
        right: 8,
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
      // onPress={() => router.push("/music-details")}
    >
      {/* Artwork Placeholder */}
      <View className="bg-[#444] rounded-[12px] p-[12px]">
        <Feather name="music" size={28} color={"#ddd"} />
      </View>

      {/* Song Info */}
      <View className="flex-[1] ml-3 justify-center">
        <Text size={12} className="text-white" numberOfLines={1}>
          {currentTrack?.name}
        </Text>
        <Text size={12} className="text-[#aaa]" numberOfLines={1}>
          {currentTrack?.artist}
        </Text>
      </View>

      {/* Controls */}
      <View className="flex-row items-center ml-3">
        <TouchableOpacity onPress={togglePlayback}>
          <FontAwesome6
            name={isPlaying ? "pause" : "play"}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={playNextTrack} className="ml-3">
          <Entypo name="controller-next" size={26} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
