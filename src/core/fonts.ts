import { loadAsync } from 'expo-font';

// Font map
const fonts = {
  'fira-code': require('../../assets/fonts/FiraCode.ttf'),
  'fira-code-medium': require('../../assets/fonts/FiraCode-Medium.ttf'),
  'fira-code-semibold': require('../../assets/fonts/FiraCode-SemiBold.ttf'),
  Poppins: require('../../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
};

/**
 * Load fonts from local filesystem
 */
export const loadFonts = async () => {
  await loadAsync(fonts);
};
