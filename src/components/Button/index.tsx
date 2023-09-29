import React, { FunctionComponent } from "react";
import { ButtonContainer, ButtonText } from "./styles"
import { CustomButtonProps } from "./types"
import { useTheme } from "styled-components";

/**
 * Renders a button component with the specified title and variant.
 * 
 * @param onPress - The function to be called when the button is pressed.
 * @param title - The title text to be displayed on the button.
 * @param variant - The variant style of the button (default: 'primary').
 * @returns The rendered button component.
 */


export const AcasoButton: FunctionComponent<CustomButtonProps> = ({ onPress, title, variant = 'primary',fontFamily, ...props }) => {
    const theme = useTheme();

    const variants = {
        primary: {
            'background-color': 'Primary-Button',
            color: 'Primary-Text',
        },
        secondary: {
            'background-color': 'Secondary-Button',
            color: 'Secondary-Text',
        },
        'secondary-light': {
            'background-color': 'Secondary-Light-Button',
            color: 'Secondary-Light-Text',
        },
    };

    return (
        <ButtonContainer onPress={onPress} style={{ backgroundColor: theme.colors.Galaxy[variants[variant]["background-color"]] }} >
            <ButtonText style={{ color: theme.colors.Galaxy[variants[variant].color], fontFamily: fontFamily }}>{title}</ButtonText>
        </ButtonContainer >
    )
}
