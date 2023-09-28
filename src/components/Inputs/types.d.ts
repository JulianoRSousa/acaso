import {ComponentProps} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ExtraInputProps {
  icon?: ComponentProps<typeof Icon>['name'];
  label?: string;
  showPassword?: boolean;
  error?: string;
}

export type InputProps = TextInputProps & ExtraInputProps;
