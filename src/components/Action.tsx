import { colours } from '@/config';
import React, { FC, useCallback, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Icon, { eIcon } from './icon';
import { iAction } from '@/types';

interface iActionProps extends iAction {
  large?: boolean;
  offset?: boolean;
  icon: eIcon;
  onPress: () => void;
  padding?: number;
  background?: string;
}
const Action: FC<iActionProps> = ({ icon, onPress, large, offset, color, padding, background }) => {
  const _generateStyles = useCallback(
    ({ pressed }) => [
      pressed && styles.pressed,
      styles.action,
      offset && styles.offset,
      padding && { padding },
      background && { backgroundColor: background },
    ],
    [offset, padding, background],
  );

  const size = useMemo(() => (large ? 24 : 20), [large]);
  return (
    <Pressable hitSlop={24} style={_generateStyles} onPress={onPress}>
      <Icon width={size} height={size} icon={icon} color={color ?? colours.dark.color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  action: { borderRadius: 8 },
  offset: {
    marginRight: 16,
  },
  pressed: { opacity: 0.6 },
});

export default Action;
