import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Container, AcasoButton, Text } from '@/components';
import { useTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AuthContext from "@/context/auth";
import { useProfilePicture } from './hooks/useProfilePicture';



const ProfilePicture: React.FC = () => {
    const theme = useTheme()
    const photo = true
    const { user } = useContext(AuthContext)
    const { data } = useProfilePicture()
    console.log('dataaa: ', data)

    const { navigate } = useNavigation()

    return (
        <Container style={{ justifyContent: 'space-around', height: '90%' }}>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>Insira uma foto para seu perfil de aca.so</Text>
            <LinearGradient style={{
                width: '80%', aspectRatio: 1, borderRadius: 2000,
                alignItems: 'center', justifyContent: 'center'
            }} colors={[theme.colors.Galaxy['Start-Profile-Linear'], theme.colors.Galaxy['End-Profile-Linear']]}>
                <Image source={require('@/assets/Images/nullProfilePicture.png')}
                    resizeMode='contain' style={{
                        width: '88%', height: '88%',
                        backgroundColor: theme.colors.GreyScale['Background-Dark-400'], borderRadius: 2000
                    }} />
            </LinearGradient>
            {!photo ?
                <View style={{ justifyContent: 'center', width: '100%' }}>
                    <AcasoButton onPress={() => console.log('button')} variant={'primary'} title='Inserir foto' />
                    <TouchableOpacity
                        onPress={() => navigate('Home')}
                        style={{ borderBottomWidth: 1, borderColor: theme.colors.GreyScale['White-100'], alignSelf: 'center' }}>
                        <Text>Entrar sem foto</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ justifyContent: 'center', width: '100%' }}>
                    <AcasoButton onPress={() => navigate('Home')} title='Continuar' />
                    <AcasoButton onPress={() => console.log('userData: ', JSON.stringify(user, null, 2))} variant={'secondary-light'} title='Trocar foto' />
                </View>}
        </Container>
    )
}

export default ProfilePicture;