import {useApi, useUserInfo} from '@/hooks';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {Alert} from 'react-native';
import * as Yup from 'yup';

export const useVerify = () => {
  const {confirmEmail, resendConfirmationCode} = useApi();
  const {userData} = useUserInfo();
  const {navigate} = useNavigation();

  const resendCode = async () => {
    userData?.email &&
      (await resendConfirmationCode(userData?.email).then(res => {
        if (res.status === 200) {
          Alert.alert(
            'Tudo certo!',
            'Novo código de verificação enviado, Verifique seu e-mail',
          );
        }
      }));
  };

  const validationSchema = Yup.object().shape({
    confirmationCode: Yup.string().required('Digite o código de verificação'),
  });

  const formik = useFormik({
    initialValues: {
      confirmationCode: '',
    },
    initialErrors: {},
    onSubmit: values => {
      userData?.email &&
        confirmEmail(
          userData?.email.toLocaleLowerCase(),
          values.confirmationCode,
        ).then(res => {
          if (res.status === 204) {
            navigate('Login');
          }
        });
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

  return {...formik, resendCode};
};
