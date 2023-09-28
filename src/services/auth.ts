interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '',
        user: {
          name: '',
          email: '',
        },
      });
    }, 2000);
  });
}
export function signOut() {
  return null;
}
