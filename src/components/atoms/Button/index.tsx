import React from 'react';
import type {
    DimensionValue,
  TextStyle,
  ViewStyle} from 'react-native';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  height?: number;
  onPress: () => void;
  type?: 'link' | 'outlined' | 'primary' | 'secondary' | 'tertiary';
  width?: DimensionValue | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  height = 55,
  onPress,
  type = 'primary',
  width = 'auto',
}) => {
  const buttonStyles: ViewStyle[] = [
    styles.button,
    styles[type],
    { height },
    fullWidth ? { width: '100%' } : { width },
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`${type}Text` as keyof typeof styles],
  ];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
