import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import * as DocumentPicker from "expo-document-picker";
// import TrackPlayer, {
//   State,
//   Track,
//   usePlaybackState,
// } from "react-native-track-player";
import { Audio } from "expo-av";

const SECURE_STORE_KEY = "user_music_files";

const MusicPlayerContext = createContext<MusicPlayerContentType | undefined>(
  undefined
);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [musicFiles, setMusicFiles] = useState<MusicFile[]>([]);
  const [currentTrack, setCurrentTrack] = useState<MusicFile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Load Music Files
  useEffect(() => {
    const loadMusicFiles = async () => {
      try {
        const storedMusic = await SecureStore.getItemAsync(SECURE_STORE_KEY);
        if (storedMusic) {
          setMusicFiles(JSON.parse(storedMusic));
        }
      } catch (error) {
        console.log("Error loading music files:", error);
      }
    };
    loadMusicFiles();
  }, []);

  const saveMusicFilesToSecureStore = async (files: MusicFile[]) => {
    try {
      await SecureStore.setItemAsync(SECURE_STORE_KEY, JSON.stringify(files));
    } catch (error) {
      console.log("Error saving files", error);
    }
  };

  const addMusicFile = async (): Promise<void> => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        multiple: true,
      });

      if (!result.canceled && result.assets?.length > 0) {
        const selectedFiles: MusicFile[] = result.assets.map((file) => ({
          id: file.name,
          name: file.name,
          uri: file.uri,
          artist: "Unknow Artist",
          artwork: null,
        }));

        // Merge new files by replacing duplicates
        const updatedFiles = [...musicFiles];
        selectedFiles.forEach((newFile) => {
          const existingIndex = updatedFiles.findIndex(
            (file) => file.id === newFile.id
          );
          if (existingIndex !== -1) {
            // Replace the exisiting file
            updatedFiles[existingIndex] = newFile;
          } else {
            // Add new file
            updatedFiles.push(newFile);
          }
        });

        setMusicFiles(updatedFiles);
        await saveMusicFilesToSecureStore(updatedFiles);
      }
    } catch (error) {
      console.log("No files selected", "Please select at least one audio file");
    }
  };

  // Play music track
  // const playTrack = async (track: MusicFile, index: number): Promise<void> => {
  //   try {
  //     await TrackPlayer.reset();
  //     await TrackPlayer.add({
  //       id: track.id,
  //       url: track.uri,
  //       title: track.name,
  //       artist: track.artist,
  //       artwork: track.artwork,
  //     } as Track);
  //     await TrackPlayer.play();
  //     setCurrentTrack(track);
  //     setCurrentIndex(index);
  //   } catch (error) {
  //     console.log("Error playing track:", error);
  //   }
  // };

  const playTrack = async (track: MusicFile): Promise<void> => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        {
          uri: track.uri,
        },
        { shouldPlay: true }
      );

      setSound(newSound);
      setCurrentTrack(track);
      setIsPlaying(true);
    } catch (error) {}
  };

  // Toggle play back
  const togglePlayback = async (): Promise<void> => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
    setIsPlaying(!isPlaying);
  };

  //stop play back
  const stopPlayback = async (): Promise<void> => {
    if (sound) {
      await sound.stopAsync();
    }
    setIsPlaying(false);
  };

  // Play previous track
  const playPreviousTrack = async (): Promise<void> => {
    if (musicFiles.length === 0) return;

    const currentIndex = musicFiles.findIndex(
      (file) => file.uri === currentTrack?.uri
    );

    const prevIndex =
      currentIndex - 1 >= musicFiles.length ? 0 : currentIndex - 1;
    await playTrack(musicFiles[prevIndex]);
  };

  // play next track
  const playNextTrack = async (): Promise<void> => {
    if (musicFiles.length === 0) return;

    const currentIndex = musicFiles.findIndex(
      (file) => file.uri === currentTrack?.uri
    );

    const nextIndex =
      currentIndex + 1 >= musicFiles.length ? 0 : currentIndex + 1;
    await playTrack(musicFiles[nextIndex]);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        musicFiles,
        addMusicFile,
        playTrack,
        isPlaying,
        togglePlayback,
        stopPlayback,
        currentTrack,
        playPreviousTrack,
        playNextTrack,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = (): MusicPlayerContentType => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a musicplayerprovider");
  }
  return context;
};
