import { loadFonts } from '@/core/fonts';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

/**
 * Load local resources
 * @returns whether the assets are loaded
 */
export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Loads all the cached resources
  const handleLoadResources = useCallback(async () => {
    try {
      SplashScreen.preventAutoHideAsync();

      await loadFonts();
    } catch (e) {
      // Send error to sentry
      // sentry.Browser.captureException(e);
    } finally {
      setLoadingComplete(true);

      // Hide the splash screen one frame later
      requestAnimationFrame(() => SplashScreen.hideAsync());
    }
  }, []);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    handleLoadResources();
  }, []);

  return isLoadingComplete;
};
