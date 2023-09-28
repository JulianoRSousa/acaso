import { ComponentProps } from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ExtraTouchableProps {
    variant?: 'primary' | 'secondary' | 'secondary-light'
    title: string;
    fonstSize?: number;
    fontFamily?: string;
}

export type CustomButtonProps = TouchableOpacityProps & TextProps & ExtraTouchableProps;

