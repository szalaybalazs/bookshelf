import React, { FC } from 'react';
import { View } from 'react-native';

interface iSeparatorProps {
  scale?: number;
  horizontal?: boolean;
}

const Separator: FC<iSeparatorProps> = ({ scale, horizontal }) => {
  return <View style={{ [horizontal ? 'width' : 'height']: (scale ?? 3) * 8 }} />;
};

export default Separator;
