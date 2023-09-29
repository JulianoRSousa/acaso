import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {acasoApi} from '@/network/api';

interface userData {
  firstName: string;
  lastName: string;
  email: string;
}
export const useUserInfo = () => {
  const [userData, setUserData] = useState<userData | null>(null);
  const [userAuth, setUserAuth] = useState(null);

  const getUserAuth = async () => {
    const userInfo = await AsyncStorage.getItem('@authdata').then(res => {
      res && JSON.parse(res);
      return res;
    });
    console.log('userInfo', userInfo);
    setUserAuth(userInfo);
    return userInfo;
  };

  useEffect(() => {
    getUserAuth();
    console.log('opa');
  });

  const editUserData = async (userData: userData) => {
    await AsyncStorage.setItem('@user', JSON.stringify(userData));
  };
  const getUserData = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      setUserData(JSON.parse(user));
    }
  };
  return {
    userData,
    editUserData,
  };
};
