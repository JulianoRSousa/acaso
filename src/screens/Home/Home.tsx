import { AcasoButton, Container, Text } from '@/components';
import AuthContext from '@/context/auth';
import { useContext } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';


const Home: React.FC = () => {
    const { signOut } = useContext(AuthContext);
    const theme = useTheme()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: theme.colors.Galaxy['Black-900'] }}>
            <ImageBackground source={require('@/assets/Images/starsBackground.png')} style={{
                width: '100%',
                aspectRatio: 1,
                position: 'absolute',
            }} />
            <Container>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '65%', height: '100%' }}>
                    <LinearGradient style={{
                        width: '80%', aspectRatio: 1, borderRadius: 2000,
                        alignItems: 'center', justifyContent: 'center'
                    }} colors={[theme.colors.Galaxy['White-100'], theme.colors.Galaxy['White-100']]}>
                        <Image source={require('@/assets/Images/nullProfilePicture.png')}
                            resizeMode='contain' style={{
                                width: '88%', height: '88%',
                                backgroundColor: theme.colors.GreyScale['Background-Dark-400'], borderRadius: 2000
                            }} />
                    </LinearGradient>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Raleway-BoldItalic', fontSize: 50 }}>JOÃO</Text>
                        <Text style={{ fontFamily: 'Raleway-LightItalic', fontSize: 50 }}>CARLOS</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <Text>Ativo há pelo menos</Text>
                        <Text style={{ fontFamily: 'Raleway-Bold' }}> 42 minutos</Text>
                    </View>
                    <AcasoButton onPress={() => signOut()} fontFamily='Raleway-Medium' fonstSize={16} title='Sair de aca.so' />
                    <View style={{ minHeight: '25%' }} />
                </View>
            </Container>
        </View>
    )
}

export default Home;