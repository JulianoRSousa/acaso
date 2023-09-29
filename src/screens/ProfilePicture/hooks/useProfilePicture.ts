import {useUserInfo} from '@/hooks';

export const useProfilePicture = () => {
  let {userData} = useUserInfo();
  return {data: userData};
};
