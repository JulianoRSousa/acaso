import { Container, Text, AcasoInput, AcasoButton } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { navigate } = useNavigation();
    return (
        <Container>
            <Text style={{ fontSize: 32, fontWeight: '700' }}>Cadastro</Text>
            <AcasoInput label="E-mail*"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoInput
                label="Primeiro nome*"
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Primeiro nome"
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoInput
                label="Último nome*"
                value={lastName}
                onChangeText={setLastName}
                placeholder="Último nome"
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoInput
                label="Senha*"
                value={password}
                onChangeText={setPassword}
                placeholder="*************"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoInput
                label="Confirme sua senha*"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="*************"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoButton onPress={() => navigate('Verify')} variant={'primary'} title='Criar conta em aca.so' />
            <AcasoButton onPress={() => navigate('Login')} variant={'secondary'} title='Voltar ao login' />
        </Container>
    );
}

export default Register;