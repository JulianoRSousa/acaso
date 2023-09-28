import {acasoApi} from '@/network/api';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export async function signIn(email: string, password: string) {
  acasoApi({
    method: 'post',
    url: '/auth/signin',
    data: {
      email,

      password,
    },
    headers: {
      accept: 'application/json',
      'action-source': 'app',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('Data: ', response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      return null;
    });
}
export function signOut() {
  return null;
}
