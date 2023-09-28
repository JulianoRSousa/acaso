import React, { useContext, useState } from "react";
import { AcasoInput, Container, Text } from "@/components";
import { AcasoButton } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "@/context/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useNavigation();
    const { signed, signIn } = useContext(AuthContext);

    console.log(signed);

    function handleSign() {
        signIn();
    }

    return (
        <Container>
            <Text style={{ fontSize: 32, fontWeight: '700' }}>Login</Text>

            <AcasoInput label="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ fontFamily: 'Raleway-Thin' }}
            />
            <AcasoInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                placeholder="******"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
            />

            <AcasoButton onPress={() => handleSign()} variant={'primary'} title='Entrar' />
            <Text>Não possui conta em aca.so?</Text>
            <AcasoButton onPress={() => navigate('Register')} variant={'secondary'} title='Criar uma conta' />
        </Container>
    );
}

export default Login;