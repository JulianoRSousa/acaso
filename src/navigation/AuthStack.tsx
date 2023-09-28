import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/types/navigation';
import Login from '@/screens/Login/Login';
import Register from '@/screens/Register/Register';
import Verify from '@/screens/Verify/Verify';
import { HeaderLogoAcaso } from '@/components';
import { useTheme } from 'styled-components';


const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
    const theme = useTheme();

    return (
        <Navigator initialRouteName={'Login'} screenOptions={{
            contentStyle: { backgroundColor: theme.colors.Galaxy['Background-Primary-800'] },
            statusBarAnimation: 'fade',
            statusBarTranslucent: true,
            statusBarStyle: 'light',
            statusBarColor: theme.colors.Galaxy['Background-Primary-800'],
            headerTransparent: true,
            headerBackVisible: false,
            headerTitle: () => <HeaderLogoAcaso />,
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
        </Navigator >
    );
};

export default AuthStack;