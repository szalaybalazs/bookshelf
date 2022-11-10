import { Action, Row, Separator } from '@/components';
import { colours } from '@/config';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { navigation, styled } from '../core';
import { iBook } from '../types';

const CoverWrapper = styled.View`
  height: 360px;
`;
const Cover = styled.Image`
  height: 220px;
  width: 100%;
`;

interface iBookModalHeaderProps extends iBook {
  share?: boolean;
}

const BookModalHeader: FC<iBookModalHeaderProps> = ({ colour, cover, share }) => {
  return (
    <CoverWrapper>
      <LinearGradient style={{ flex: 1 }} colors={[colour || colours.dark.background, colours.dark.background]}>
        <Row padding={24}>
          <Action large icon='chevron-down' onPress={navigation.pop} />
          {share && <Action large icon='share' onPress={() => alert('Sharing coming soon')} />}
        </Row>

        <Separator scale={1} />
        <Cover source={{ uri: cover }} resizeMode='contain' />
        <Separator scale={6} />
      </LinearGradient>
    </CoverWrapper>
  );
};

export default BookModalHeader;
