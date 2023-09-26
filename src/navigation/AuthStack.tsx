import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/types/global';
import Login from '@/screens/Login/Login';
import Register from '@/screens/Register/Register';
import Verify from '@/screens/Verify/Verify';
import { colors } from '@/theme';
import { LogoAcaso } from '@/components';


const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Navigator initialRouteName={'Login'} screenOptions={{
            contentStyle: { backgroundColor: colors.Galaxy['Background-Blue'] },
            statusBarAnimation: 'fade',
            statusBarTranslucent: true,
            statusBarStyle: 'light',
            statusBarColor: colors.Galaxy['Background-Blue'],
            headerTransparent: true,
            headerBackVisible: false,
            headerTitle: () => <LogoAcaso />,
        }}>
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Register"
                component={Register}
            />
            <Screen
                name="Verify"
                component={Verify}
            />
        </Navigator>
    );
};

export default AuthStack;