import { colours, fonts } from '@/config';
import navigation from '@/core/navigation';
import locale from '@/localisation';
import { iAction } from '@/types';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Action from './Action';

export interface iHeaderProps {
  type?: 'REGULAR' | 'SLIM';
  title: string;
  subtitle?: string;
  action?: iAction;
  poppable?: boolean;
  modal?: boolean;
  background?: string;
}

const Header: FC<iHeaderProps> = ({ title, subtitle, poppable, type, action, modal, background }) => {
  const _handlePop = useCallback(() => navigation.pop(), []);
  const Title = useMemo(() => <Text style={styles.title}>{locale(title)}</Text>, [title]);

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: background || undefined }}>
      <View style={styles.wrapper}>
        <View style={[styles.row, styles.header]}>
          {poppable && <Action large icon={modal ? 'chevron-down' : 'arrow-left'} onPress={_handlePop} offset />}
          {type === 'SLIM' && Title}
          <View style={styles.spacer} />
          {action && <Action {...action} />}
        </View>
        {type !== 'SLIM' && <View style={[styles.row, styles.footer]}>{Title}</View>}
        {subtitle && <Text style={styles.subtitle}>{locale(subtitle)}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    // paddingTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {},
  footer: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
  },
  spacer: { flex: 1 },
  subtitle: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: fonts.primary.medium,
    color: colours.dark.color,
    opacity: 0.4,
  },
});

export default Header;
