type MusicFile = {
  id: string;
  name: string;
  uri: string;
  artist: string;
  artwork: string | null;
};

type MusicPlayerContentType = {
  musicFiles: MusicFile[];
  currentTrack: MusicFile | null;
  addMusicFile: () => void;
  playTrack: (track: MusicFile) => void;
  togglePlayback: () => void;
  stopPlayback: () => void;
  playPreviousTrack: () => void;
  playNextTrack: () => void;
  isPlaying: boolean;
};
