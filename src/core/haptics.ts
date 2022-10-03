import * as Haptics from 'expo-haptics';

export const hapticError = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
};
export const hapticSuccess = () => {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};
