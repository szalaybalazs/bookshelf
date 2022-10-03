import { colours } from '@/config';
import Imagecolours from 'react-native-image-colors';

import tinycolor from 'tinycolor2';

export const getColor = async (uri?: string): Promise<string | undefined> => {
  if (!uri) return undefined;
  const result = await Imagecolours.getColors(uri, {
    cache: true,
    key: uri,
  });

  if (result.platform === 'android') return result.vibrant;
  if (result.platform === 'ios') return result.primary;
  return result.lightVibrant;
};

export const getTextColorForBackground = (background?: string) => {
  if (!background) return colours.dark.color;
  const color = tinycolor(background);
  const brigthness = color.getBrightness();
  console.log(brigthness);
  if (brigthness > 120) return colours.light.color;
  return colours.dark.color;
};
