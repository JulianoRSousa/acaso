import {useApi} from '@/hooks';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const useRegister = () => {
  const {signUp} = useApi();
  const {navigate} = useNavigation();

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
      navigate('Verify');
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

  return {...formik, signUp};
};
