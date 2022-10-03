import { colours, fonts } from '@/config';
import { FC, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface iBookProps {
  id: string;
  title: string;
  author: string;
  selected?: string;
  onPress?: (address: string) => void;
}

const Book: FC<iBookProps> = ({ id, selected, title, author, onPress }) => {
  const _handlePress = useCallback(() => onPress?.(id), [id]);

  const _generateStyles = useCallback(
    ({ pressed }: any) => [styles.wrapper, selected && styles.selected, pressed && styles.pressed],
    [selected],
  );

  return (
    <Pressable style={_generateStyles} onPress={_handlePress}>
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.name}>
          {title}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.username}>
        {author}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  selected: {
    borderRadius: 12,
    backgroundColor: colours.dark.foreground,
  },
  pressed: { opacity: 0.6 },
  header: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: colours.dark.color,
    fontFamily: fonts.primary.medium,
  },
  username: {
    fontSize: 16,
    color: colours.dark.primary,
    fontFamily: fonts.code.medium,
  },
  address: {
    fontSize: 14,
    color: colours.dark.color,
    fontFamily: fonts.code.medium,
    opacity: 0.4,
  },
});

export default Book;
