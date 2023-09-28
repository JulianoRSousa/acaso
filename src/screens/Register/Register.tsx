import { Container, Text, AcasoInput, AcasoButton } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useRegister } from './hooks/useRegister';

const Register = () => {
    const { navigate } = useNavigation();

    const {
        errors,
        handleBlur,
        setFieldValue,
        submitForm,
        values,
        touched
    } = useRegister();

    console.log('values: ', values)

    return (
        <Container>
            <Text style={{ fontSize: 32, fontWeight: '700' }}>Cadastro</Text>
            <AcasoInput label="E-mail*"
                value={values.email}
                onChangeText={(text) => setFieldValue('email', text)}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ fontFamily: 'Raleway-Thin' }}
                error={touched.email && errors.email ? errors.email : ''}
                onBlur={handleBlur('email')}
            />
            <AcasoInput
                label="Primeiro nome*"
                value={values.firstName}
                onChangeText={(text) => setFieldValue('firstName', text)}
                placeholder="Primeiro nome"
                style={{ fontFamily: 'Raleway-Thin' }}
                error={touched.firstName && errors.firstName ? errors.firstName : ''}
                onBlur={handleBlur('firstName')}
            />
            <AcasoInput
                label="Último nome*"
                value={values.lastName}
                onChangeText={(text) => setFieldValue('lastName', text)}
                placeholder="Último nome"
                style={{ fontFamily: 'Raleway-Thin' }}
                error={touched.lastName && errors.lastName ? errors.lastName : ''}
                onBlur={handleBlur('lastName')}
            />
            <AcasoInput
                label="Senha*"
                value={values.password}
                onChangeText={(text) => setFieldValue('password', text)}
                placeholder="*************"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
                error={touched.password && errors.password ? errors.password : ''}
                onBlur={handleBlur('password')}
            />
            <AcasoInput
                label="Confirme sua senha*"
                value={values.confirmPassword}
                onChangeText={(text) => setFieldValue('confirmPassword', text)}
                placeholder="*************"
                secureTextEntry={true}
                style={{ fontFamily: 'Raleway-Thin' }}
                error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                onBlur={handleBlur('confirmPassword')}
            />
            <AcasoButton onPress={() => submitForm()} variant={'primary'} title='Criar conta em aca.so' />
            <AcasoButton onPress={() => navigate('Login')} variant={'secondary'} title='Voltar ao login' />
        </Container>
    );
}

export default Register;