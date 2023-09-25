import { View, Image } from 'react-native'

export const LogoAcaso = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', aspectRatio: 5, height: '100%' }}>
            <Image source={require('@/assets/Images/logoAcaso.png')} resizeMode='center' />
        </View>
    )
}