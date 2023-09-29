import {useApi, useUserInfo} from '@/hooks';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {Alert} from 'react-native';
import * as Yup from 'yup';

export const useRegister = () => {
  const {signUp} = useApi();
  const {navigate} = useNavigation();
  const {editUserData} = useUserInfo();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Digite um e-mail válido para continuar')
      .email('Por favor, digite um e-mail válido'),
    password: Yup.string()
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .matches(/[a-zA-Z]/, 'A senha precisa conter ao menos uma letra')
      .matches(/[0-9]/, 'A senha precisa conter ao menos um número')
      .required('Digite uma senha'),
    firstName: Yup.string().required('Digite seu primeiro nome'),
    lastName: Yup.string().required('Digite seu último nome'),
    confirmPassword: Yup.string()
      .required('Confirme sua senha')
      .oneOf([Yup.ref('password')], 'Senhas não coincidem')
      .matches(/[a-zA-Z]/, 'A senha precisa conter ao menos uma letra')
      .matches(/[0-9]/, 'A senha precisa conter ao menos um número'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    },
    initialErrors: {},
    onSubmit: values => {
      signUp(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
      ).then(response => {
        editUserData({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        });
        if (
          response.status === 200 ||
          response?.response?.data?.code == 'ERR.1.0010'
        ) {
          navigate('Verify');
        } else {
          Alert.alert('Erro', response.response?.data.message);
        }
      });
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

  return {...formik, signUp};
};
