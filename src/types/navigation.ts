import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Authentication stack params
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Verify: undefined;
};

//App stack params
export type AppStackParamList = {
  Home: undefined;
  ProfilePicture: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList, AuthStackParamList {}
  }
}
