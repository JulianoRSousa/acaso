import {acasoApi} from '@/network/api';
import {AxiosError, AxiosResponse} from 'axios';

export const useApi = () => {
  const signIn = async (
    email: string,
    password: string,
  ): Promise<any | null> => {
    const signInResult = await acasoApi({
      method: 'post',
      url: '/auth/v2/login',
      data: {
        email: email.toLocaleLowerCase(),
        password,
      },
      headers: {
        'action-source': 'app',
        'Content-Type': 'application/json',
      },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error?.response?.data);
        return error;
      });
    return signInResult;
  };
  const signOut = () => {
    return null;
  };

  const resendConfirmationCode = async (email: string): Promise<any | null> => {
    const resendResult = await acasoApi({
      method: 'post',
      url: '/auth/resend-confirmation-code',
      data: {
        email: email.toLocaleLowerCase(),
      },
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error?.response?.data);
        return error;
      });
    return resendResult;
  };

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<any | null> => {
    const signupResult = await acasoApi({
      method: 'post',
      url: '/auth/sign-up',
      data: {
        email: email.toLocaleLowerCase(),
        password,
        first_name: firstName,
        last_name: lastName,
      },
      headers: {
        accept: 'application/json',
        'action-source': 'app',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error?.response?.data);
        return error;
      });

    return signupResult;
  };

  const confirmEmail = async (
    email: string,
    confirmationCode: string,
  ): Promise<any | null> => {
    const confirmResult = await acasoApi({
      method: 'post',
      url: '/auth/v2/confirm-sign-up',
      data: {
        email: email.toLocaleLowerCase(),
        confirmation_code: confirmationCode,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error?.response?.data);
        return error;
      });
    return confirmResult;
  };

  return {
    signUp,
    confirmEmail,
    signIn,
    signOut,
    resendConfirmationCode,
  };
};
