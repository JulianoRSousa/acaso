import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components/native";
import { InputProps } from "./types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from '@/components'
import { ContainerWrapper, InputWrapper, RightIcon, InputField, ErrorText } from "./styles";



/**
 * Generates the function comment for the given function body.
 *
 * @param {InputProps} icon - The icon for the input.
 * @param {string} label - The label for the input.
 * @param {boolean} showPassword - Whether to show the password or not.
 * @param {string} error - The error message, if any.
 * @param {...any} props - Additional props for the input.
 * @return {ReactNode} - The rendered component.
 */
export const AcasoInput: FunctionComponent<InputProps> = ({ icon, label, showPassword = false, error, ...props }) => {
    const theme = useTheme();
    const [passwordVisible, setPasswordVisible] = React.useState(showPassword);
    return (
        <ContainerWrapper>
            <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16 }}>{label}</Text>
            <InputWrapper style={[error ? { borderColor: theme.colors.Galaxy["Accent-500"], borderWidth: 2 } : {}]}>
                <InputField {...props}
                    placeholderTextColor={theme.colors.GreyScale['White-100']}
                    secureTextEntry={!passwordVisible}
                    style={props.style} />
                {props.secureTextEntry && <RightIcon onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ?
                        <Icon name={'eye-off-outline'} size={20} color={theme.colors.GreyScale['White-100']} /> :
                        <Icon name={'eye-outline'} size={20} color={theme.colors.GreyScale['White-100']} />
                    }
                </RightIcon>}
            </InputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </ContainerWrapper>
    );
}