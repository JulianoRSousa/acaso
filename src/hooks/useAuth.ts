import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = async () => {
  const getIdToken = async () => {
    const idToken = await AsyncStorage.getItem('@authdata').then(res => {
      res && JSON.parse(res);
      return res;
    });
    return idToken;
  };

  const bearerToken = `Bearer ${getIdToken()}`;
  
  return {
    getIdToken,
    bearerToken,
  };
};
