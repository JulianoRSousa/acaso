import { useRef } from 'react';
import { TextInput } from 'react-native';
import { Container, Text, AcasoInput, AcasoButton } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useRegister } from './hooks/useRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

    const firstNameRef = useRef<TextInput>(null);
    const lastNameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    return (
        <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}
            extraHeight={100}
        >
            <Container style={{ justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 32, fontWeight: '700' }}>Cadastro</Text>
                <AcasoInput label="E-mail*"

                    value={values.email}
                    onChangeText={(text) => setFieldValue('email', text)}
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                    style={{ fontFamily: 'Raleway-Thin' }}
                    error={touched.email && errors.email ? errors.email : ''}
                    onBlur={handleBlur('email')}
                    returnKeyType='next'
                    onSubmitEditing={() => firstNameRef?.current?.focus()}
                />
                <AcasoInput
                    ref={firstNameRef}
                    label="Primeiro nome*"
                    value={values.firstName}
                    onChangeText={(text) => setFieldValue('firstName', text)}
                    placeholder="Primeiro nome"
                    style={{ fontFamily: 'Raleway-Thin' }}
                    error={touched.firstName && errors.firstName ? errors.firstName : ''}
                    onBlur={handleBlur('firstName')}
                    returnKeyType='next'
                    onSubmitEditing={() => lastNameRef?.current?.focus()}
                />
                <AcasoInput
                    ref={lastNameRef}
                    label="Último nome*"
                    value={values.lastName}
                    onChangeText={(text) => setFieldValue('lastName', text)}
                    placeholder="Último nome"
                    style={{ fontFamily: 'Raleway-Thin' }}
                    error={touched.lastName && errors.lastName ? errors.lastName : ''}
                    onBlur={handleBlur('lastName')}
                    returnKeyType='next'
                    onSubmitEditing={() => passwordRef?.current?.focus()}
                />
                <AcasoInput
                    ref={passwordRef}
                    label="Senha*"
                    value={values.password}
                    onChangeText={(text) => setFieldValue('password', text)}
                    placeholder="*************"
                    secureTextEntry={true}
                    style={{ fontFamily: 'Raleway-Thin' }}
                    error={touched.password && errors.password ? errors.password : ''}
                    onBlur={handleBlur('password')}
                    returnKeyType='next'
                    onSubmitEditing={() => confirmPasswordRef?.current?.focus()}
                />
                <AcasoInput
                    ref={confirmPasswordRef}
                    label="Confirme sua senha*"
                    value={values.confirmPassword}
                    onChangeText={(text) => setFieldValue('confirmPassword', text)}
                    placeholder="*************"
                    secureTextEntry={true}
                    style={{ fontFamily: 'Raleway-Thin' }}
                    error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                    onBlur={handleBlur('confirmPassword')}
                    returnKeyType='go'
                    onSubmitEditing={() => submitForm()}
                />
                <AcasoButton onPress={() => submitForm()} variant={'primary'} title='Criar conta em aca.so' />
                <AcasoButton onPress={() => navigate('Login')} variant={'secondary'} title='Voltar ao login' />
            </Container >
        </KeyboardAwareScrollView >
    );
}

export default Register;