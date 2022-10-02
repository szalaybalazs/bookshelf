import ImageColors from 'react-native-image-colors';

export const getColor = async (uri?: string): Promise<string | undefined> => {
  if (!uri) return undefined;
  const result = await ImageColors.getColors(uri, {
    cache: true,
    key: uri,
  });

  if (result.platform === 'android') return result.vibrant;
  if (result.platform === 'ios') return result.primary;
  return result.lightVibrant;
};
