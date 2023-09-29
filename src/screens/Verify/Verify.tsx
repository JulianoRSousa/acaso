import { Container, Text, AcasoInput, AcasoButton } from '@/components';
import { View } from 'react-native';
import { useVerify } from './hooks/useVerify';

const Verify: React.FC = () => {
    const { errors, handleBlur, setFieldValue, submitForm, values, touched, resendCode } = useVerify();
    return (
        <Container>
            <Text style={{ fontSize: 32, fontWeight: '700', maxWidth: 180 }}>Confirmar e-mail</Text>

            <AcasoInput label="Código"
                value={values.confirmationCode}
                onChangeText={(text) => setFieldValue('confirmationCode', text)}
                placeholder="Digite o código recebido..."
                style={{ fontFamily: 'Raleway-Thin' }}
                onBlur={handleBlur('confirmationCode')}
                error={touched.confirmationCode && errors.confirmationCode ? errors.confirmationCode : ''}
                keyboardType='number-pad'
                returnKeyType="go"
                returnKeyLabel='Confirmar'
                onSubmitEditing={() => submitForm()}
            />

            <AcasoButton onPress={() => submitForm()} variant={'primary'} title='Confirmar e-mail' />
            <Text>Não recebeu o código?</Text>
            <AcasoButton onPress={() => resendCode()} variant={'secondary'} title='Reenviar código' />
            <View style={{ minHeight: '25%' }} />
        </Container>
    );
}

export default Verify;