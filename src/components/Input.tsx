import { colours, fonts } from '@/config';
import locale from '@/localisation';
import { iAction } from '@/types';
import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import Action from './Action';

interface iInputProps {
  multiline?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  code?: boolean;
  inputProps?: TextInputProps;
  action?: iAction;
}

const Input: FC<iInputProps> = ({ placeholder, value, onChange, code, multiline, action, inputProps }) => {
  return (
    <View style={[styles.wrapper, action && styles.actionWrapper]}>
      <TextInput
        autoCapitalize='none'
        {...inputProps}
        value={value}
        placeholderTextColor='rgba(255, 255, 255, 0.4)'
        placeholder={locale(placeholder ?? '')}
        multiline={multiline}
        style={[styles.input, multiline && styles.multiline, code && styles.code, action && styles.actionInput]}
        blurOnSubmit
        onChangeText={onChange}
      />
      {action && (
        <View style={styles.action}>
          <Action {...action} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    backgroundColor: colours.dark.foreground,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 56,
    color: colours.dark.color,
    paddingHorizontal: 20,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
  },
  actionInput: {
    flex: 1,
  },
  multiline: {
    height: 120,
    paddingTop: 16,
    paddingBottom: 16,
  },
  code: { fontFamily: fonts.code.medium },
  action: {
    marginHorizontal: 16,
  },
});

export default Input;
