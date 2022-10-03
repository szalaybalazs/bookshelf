import { colours, fonts } from '@/config';
import navigation from '@/core/navigation';
import locale from '@/localisation';
import React, { FC, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon, { eIcon } from './icon';

interface iOptionProps {
  icon: eIcon;
  label: string;
  target?: string;
  onPress?: () => void;
}

const Option: FC<iOptionProps> = ({ label, icon, onPress, target }) => {
  const _generateStyles = useCallback(
    ({ pressed }) => [styles.wrapper, pressed && (onPress || target) && styles.pressed],
    [JSON.stringify(onPress), target],
  );
  const _handlePress = useCallback(() => {
    if (target) navigation.navigate(target);
    else onPress?.();
  }, [JSON.stringify(onPress), target]);
  return (
    <Pressable style={_generateStyles} onPress={_handlePress}>
      <Icon color={colours.dark.color} icon={icon} />
      <Text style={styles.label}>{locale(label)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: colours.dark.color,
    fontFamily: fonts.primary.regular,
    marginLeft: 12,
  },
  pressed: { opacity: 0.6 },
});

export default Option;
