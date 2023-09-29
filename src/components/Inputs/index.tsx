import React, { FunctionComponent, forwardRef } from "react";
import { useTheme } from "styled-components/native";
import { InputProps } from "./types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from '@/components'
import { ContainerWrapper, InputWrapper, RightIcon, InputField, ErrorText } from "./styles";


export const AcasoInput: FunctionComponent<InputProps> = forwardRef(
    ({ icon, label, showPassword = false, error, ...props }, ref: any) => {
        const theme = useTheme();
        const [passwordVisible, setPasswordVisible] = React.useState(showPassword);

        return (
            <ContainerWrapper>
                <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16 }}>{label}</Text>
                <InputWrapper style={[error ? { borderColor: theme.colors.Galaxy["Accent-500"], borderWidth: 2 } : {}]}>
                    <InputField {...props}
                        ref={ref}
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
);

