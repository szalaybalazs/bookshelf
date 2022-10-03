import React, { FC, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface iEmojiProps {
  emoji?: string;
}

const emojis = ['🦄', '🤩', '🥳', '🤗', '🤓', '😎'];

const Emoji: FC<iEmojiProps> = ({ emoji }) => {
  const value = useMemo(() => {
    if (emoji) return emoji;

    return emojis[Math.floor(emojis.length * Math.random())];
  }, [emoji]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.emoji}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  emoji: {
    fontSize: 80,
  },
});

export default Emoji;
