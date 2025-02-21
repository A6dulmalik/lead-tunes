import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text } from "@/trendui";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import MusicWaveAnimation from "./MusicWaveAnimation";

export default function MusicCard({
  item,
  playAudio,
  currentPlayingUri,
}: {
  item: MusicFile;
  playAudio: (uri: string) => void;
  currentPlayingUri: string | undefined;
}) {
  const { playTrack, currentTrack, togglePlayback, isPlaying } =
    useMusicPlayer();

  const isCurrentTrack = currentTrack?.uri === item.uri;
  const handlePress = () => {
    if (isCurrentTrack) {
      togglePlayback();
    } else {
      playTrack(item);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-row my-[15px] items-center gap-3">
        <View className="bg-[#222] rounded-[10px] p-[15px]">
          {isPlaying && isCurrentTrack ? (
            <MusicWaveAnimation isPlaying={isPlaying} />
          ) : (
            <Feather name="music" size={28} color={"#ddd"} />
          )}
        </View>
        <Text className="text-white w-[88%] text-[16px]">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
