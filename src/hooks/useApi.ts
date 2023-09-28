import {acasoApi} from '@/network/api';
import {AxiosResponse} from 'axios';

export const useApi = () => {
  /**
   * Signs out the user.
   *
   * @param email - The user's email.
   * @param password - The user's password.
   * @param firstName - The user's first name.
   * @param lastName - The user's last name.
   * @returns The response data or null if an error occurs.
   */
  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<any | null> => {
    try {
      const response: AxiosResponse = await acasoApi({
        method: 'post',
        url: '/auth/sign-up',
        data: {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
        headers: {
          accept: 'application/json',
          'action-source': 'app',
          'Content-Type': 'application/json',
        },
      });
      return response.data ?? null;
    } catch (error) {
      console.error(error);
    }
  };

  const confirmEmail = async (
    email: string,
    confirmationCode: string,
  ): Promise<any | null> => {
    try {
      const response: AxiosResponse = await acasoApi({
        method: 'post',
        url: '/auth/sign-out',
        data: {
          email,
          confirmation_code: confirmationCode,
        },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data ?? null;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    signUp,
    confirmEmail,
  };
};
