import { colours, fonts } from '@/config';
import { getTextColorForBackground } from '@/core/colors';
import navigation from '@/core/navigation';
import locale from '@/localisation';
import React, { FC, ReactNode, useCallback } from 'react';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon, { eIcon } from './icon';

interface iButtonProps {
  target?: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary' | 'link';
  disabled?: boolean;
  style?: any;
  params?: any;
  icon?: eIcon;
  colour?: string;
  children?: ReactNode | string;
}

const Button: FC<iButtonProps> = ({ children, target, disabled, onPress, type, style, params, icon, colour }) => {
  const _handlePress = useCallback(() => {
    if (target) navigation.navigate(target, params);
    else onPress?.();
  }, [target, JSON.stringify(onPress)]);

  const _generateWrapperStyle = useCallback(
    ({ pressed }: { pressed: boolean }) => {
      const classes = [];
      if (style) classes.push(style);

      if (type === 'link') classes.push(styles.linkWrapper);
      else classes.push(styles.wrapper);

      if (type === 'secondary') classes.push(styles.secondaryWrapper);

      if (pressed) classes.push(styles.pressed);
      if (disabled) classes.push(styles.disabled);
      if (colour) classes.push({ backgroundColor: colour });

      return classes;
    },
    [type, disabled, JSON.stringify(style), colour],
  );

  const textStyles = useMemo(() => {
    const styles = [];
    if (colour) {
      const color = getTextColorForBackground(colour);
      styles.push({
        color,
      });
    }

    return styles;
  }, [colour]);
  return (
    <Pressable style={_generateWrapperStyle} onPress={_handlePress} disabled={disabled}>
      {typeof children === 'string' ? (
        <Text style={[styles.label, type === 'link' && styles.link, ...textStyles]}>{locale(children)}</Text>
      ) : (
        children
      )}
      {icon && (
        <View style={styles.icon}>
          <Icon width={20} height={20} color={colours.dark.color} icon={icon} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: colours.dark.primary,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryWrapper: {
    flexDirection: 'row',
    backgroundColor: colours.dark.foreground,
  },
  linkWrapper: {
    width: undefined,
    paddingVertical: 18,
    flexDirection: 'row',
  },
  label: {
    color: colours.dark.color,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: fonts.primary.medium,
    fontSize: 14,
  },
  link: {
    opacity: 0.6,
  },
  pressed: {
    opacity: 0.6,
  },
  disabled: {
    opacity: 0.4,
  },
  icon: {
    opacity: 0.6,
    marginLeft: 12,
  },
});

export default Button;
