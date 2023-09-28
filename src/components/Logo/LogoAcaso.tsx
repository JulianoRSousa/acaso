import { View, Image } from 'react-native'

export const HeaderLogoAcaso = () => {
    return (
        <View style={{ alignItems: 'center', alignSelf: 'center', width: '100%', marginRight: 80, justifyContent: 'flex-start' }}>
            <Image source={require('@/assets/Images/logoAcaso.png')} resizeMode='center' style={{ alignItems: 'center', height: 20 }} />
        </View>
    )
}