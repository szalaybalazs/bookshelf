import { Header } from '@/components';
import { iHeaderProps } from '@/components/Header';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { FC, useMemo } from 'react';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface iSkeletonProps extends Partial<iHeaderProps> {
  footer?: React.ReactNode;
  centered?: boolean;
  padding?: boolean;
  safearea?: boolean;
  scrollable?: boolean;
  scrollPosition?: number;

  children?: ReactNode | ReactNode[];
}

const Skeleton: FC<iSkeletonProps> = ({
  poppable,
  centered,
  children,
  title,
  footer,
  padding = true,
  safearea = true,
  scrollable = false,
  scrollPosition = 0,
  ...rest
}) => {
  const navigation = useNavigation();

  const edges = useMemo(() => {
    const edges: Edge[] = [];

    if (!title) edges.push('top');
    if (!footer) edges.push('bottom');

    return edges.length > 0 ? edges : undefined;
  }, [title, !!footer]);

  const SafeArea = safearea ? SafeAreaView : View;
  const Container = scrollable ? View : View;
  // const Container = scrollable ? KeyboardAwareScrollView : View;
  return (
    <>
      <StatusBar style='light' />
      {title && <Header {...rest} poppable={poppable && navigation.canGoBack()} title={String(title)} />}

      <Container extraScrollHeight={24} keyboardOpeningTime={1} contentOffset={{ y: scrollPosition, x: 0 }} style={styles.flex}>
        <SafeArea mode='padding' edges={edges} style={styles.flex}>
          <View style={[centered && styles.centered, styles.wrapper, padding && styles.padding]}>{children}</View>
        </SafeArea>
      </Container>
      {footer}
    </>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  wrapper: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 24,
  },
  centered: {
    alignItems: 'center',
  },
});

export default Skeleton;
