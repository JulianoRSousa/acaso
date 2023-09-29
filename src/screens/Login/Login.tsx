import React, { useContext, useRef } from "react";
import { AcasoInput, Container, Text } from "@/components";
import { AcasoButton } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useLogin } from "./hooks/useLogin";
import { TextInput } from "react-native";


const Login = () => {
    const { navigate } = useNavigation();



    const { errors, handleBlur, setFieldValue, submitForm, values, touched } = useLogin();
    const passwordRef = useRef<TextInput>();

    return (
        <Container>
            <Text style={{ fontSize: 32, fontWeight: '700' }}>Login</Text>
            <AcasoInput label="E-mail"
                value={values.email}
                onChangeText={(text) => setFieldValue('email', text)}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ fontFamily: 'Raleway-Thin' }}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email ? errors.email : ''}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef?.current?.focus()}
            />
            <AcasoInput
                ref={passwordRef}
                label="Senha"
                value={values.password}
                onChangeText={(text) => setFieldValue('password', text)}
                onBlur={handleBlur('password')}
                error={touched.password && errors.password ? errors.password : ''}
                placeholder="******"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
                returnKeyType="go"
                onSubmitEditing={() => submitForm()}
            />

            <AcasoButton onPress={() => submitForm()} variant={'primary'} title='Entrar' />
            <Text>Não possui conta em aca.so?</Text>
            <AcasoButton onPress={() => navigate('Register')} variant={'secondary'} title='Criar uma conta' />
        </Container>
    );
}

export default Login;