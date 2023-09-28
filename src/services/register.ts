import {acasoApi} from '@/network/api';

interface SignUpProps {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export async function signUp({
  email,
  password,
  first_name,
  last_name,
}: SignUpProps) {
  acasoApi({
    method: 'post',
    url: '/auth/sign-up',
    data: {
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password,
    },
    headers: {
      accept: 'application/json',
      'action-source': 'app',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('Data: ', response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
