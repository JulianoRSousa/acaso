import AuthContext from '@/context/auth';
import {useFormik} from 'formik';
import {useContext} from 'react';
import * as Yup from 'yup';

export const useLogin = () => {
  const {signIn} = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Digite seu e-mail para continuar')
      .email('Por favor, digite um e-mail válido'),
    password: Yup.string().required('Digite uma senha'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    initialErrors: {},
    onSubmit: values => {
      signIn(values.email, values.password);
      
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

  return {...formik};
};
