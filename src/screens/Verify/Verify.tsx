import { Container, Text, AcasoInput, AcasoButton } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';

const Verify: React.FC = () => {
    const [email, setEmail] = useState('');
    const { navigate } = useNavigation();
    return (
        <Container>
         <Text style={{ fontSize: 32, fontWeight: '700', maxWidth: 180 }}>Confirmar e-mail</Text>

              <AcasoInput label="Código"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Digite o código recebido..."
                style={{ fontFamily: 'Raleway-Thin' }}
            />

             <AcasoButton onPress={() => console.log('button')} variant={'primary'} title='Confirmar e-mail' />
            <Text>Não recebeu o código?</Text>
             <AcasoButton onPress={() => console.log('resend')} variant={'secondary'} title='Reenviar código' />
            <View style={{ minHeight: '25%' }} /> 
            {/*only used to align exactly like the mockup  */}
        </Container>
    );
}

export default Verify;