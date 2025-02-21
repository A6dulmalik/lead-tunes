import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { Text } from "@/trendui";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import BottomPlayer from "@/components/music/bottomPlayer";
import MusicCard from "@/components/music/MusicCard";

export default function music() {
  const { musicFiles, addMusicFile, playTrack, currentTrack } =
    useMusicPlayer();
  // console.log(musicFiles.length);

  return (
    <View className="bg-black flex-1">
      <FlatList
        data={musicFiles}
        ListHeaderComponent={
          <View className="mb-[30px] mt-[8px] flex-row item-center justify-between ">
            <Text className="" theme="dark" variant="title">
              Songs
            </Text>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="music-note-plus"
                color={"#fff"}
                size={24}
                onPress={() => addMusicFile()}
              />
            </TouchableOpacity>
          </View>
        }
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: MusicFile }) => (
          <MusicCard
            item={item}
            playAudio={() => playTrack(item)}
            currentPlayingUri={currentTrack?.uri}
          />
        )}
        contentContainerClassName="p-[20px]"
        ListEmptyComponent={
          <View className="w-full h-[60vh] flex-1 items-center justify-center">
            <Text className="" variant="label" theme="dark">
              No music avaialble!
            </Text>
          </View>
        }
        // ListFooterComponent={<View style={{ height: 150 }}></View>}
      />
      {/* Bottom Player */}
      currentTrack && <BottomPlayer />
    </View>
  );
}

const styles = StyleSheet.create({});
