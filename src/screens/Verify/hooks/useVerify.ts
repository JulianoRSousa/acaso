import AuthContext from '@/context/auth';
import {useFormik} from 'formik';
import {useContext} from 'react';
import * as Yup from 'yup';

export const useVerify = () => {
  const {signIn} = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    confirmationCode: Yup.string().required('Digite o código de verificação'),
  });

  const formik = useFormik({
    initialValues: {
      confirmationCode: '',
    },
    initialErrors: {},
    onSubmit: values => {
      signIn();
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

  return {...formik};
};
