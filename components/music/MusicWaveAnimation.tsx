import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";

export default function MusicWaveAnimation({ isPlaying }: { isPlaying: boolean }) {
  const waveHeight1 = useSharedValue(10);
  const waveHeight2 = useSharedValue(10);
  const waveHeight3 = useSharedValue(10);

  useEffect(() => {
    if (isPlaying) {
      // Animate each bar with cascading height changes
      waveHeight1.value = withRepeat(
        withTiming(20, { duration: 550, easing: Easing.linear }),
        -1,
        true
      );
      waveHeight2.value = withRepeat(
        withTiming(30, { duration: 650, easing: Easing.linear }),
        -1,
        true
      );
      waveHeight3.value = withRepeat(
        withTiming(25, { duration: 600, easing: Easing.linear }),
        -1,
        true
      );
    } else {
      // Reset all wave heights when not playing
      waveHeight1.value = withTiming(10, { duration: 300 });
      waveHeight2.value = withTiming(10, { duration: 300 });
      waveHeight3.value = withTiming(10, { duration: 300 });
    }
  }, [isPlaying]);

  const animatedWaveStyle1 = useAnimatedStyle(() => ({
    height: waveHeight1.value,
  }));
  const animatedWaveStyle2 = useAnimatedStyle(() => ({
    height: waveHeight2.value,
  }));
  const animatedWaveStyle3 = useAnimatedStyle(() => ({
    height: waveHeight3.value,
  }));

  return (
    <View style={styles.waveContainer}>
      <Animated.View style={[styles.wave, animatedWaveStyle1]} />
      <Animated.View style={[styles.wave, animatedWaveStyle2]} />
      <Animated.View style={[styles.wave, animatedWaveStyle3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  waveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  wave: {
    width: 4,
    backgroundColor: "#ddd",
    borderRadius: 2,
    marginHorizontal: 2,
  },
});
