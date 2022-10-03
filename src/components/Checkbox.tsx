import locale from '@/localisation';
import React, { FC, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colours, fonts } from '@/config';

interface iCheckboxProps {
  checked: boolean;
  onToggle: (cheched: boolean) => void;
  label: string;
}

const Checkbox: FC<iCheckboxProps> = ({ checked, onToggle, label }) => {
  const _handlePress = useCallback(() => onToggle(!checked), [checked]);
  const _generateStyles = useCallback(({ pressed }) => [styles.wrapper, pressed && styles.pressed], []);
  return (
    <Pressable onPress={_handlePress} style={_generateStyles}>
      <View style={styles.boxWrapper}>{checked && <View style={styles.box} />}</View>
      <Text style={styles.label}>{locale(label)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxWrapper: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: colours.dark.foreground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: colours.dark.primary,
  },
  label: {
    marginLeft: 12,
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    color: colours.dark.color,
    flex: 1,
  },
  pressed: { opacity: 0.6 },
});

export default Checkbox;
