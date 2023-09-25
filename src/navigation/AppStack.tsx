import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/types/global';
import Home from '@/screens/Home/Home';
import ProfilePicture from '@/screens/ProfilePicture/ProfilePicture';
import { colors } from '@/theme';
import { LogoAcaso } from '@/components';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    return (
        <Navigator initialRouteName={'Home'} screenOptions={{
            contentStyle: { backgroundColor: colors.GreyScale.Black },
            statusBarAnimation: 'fade',
            statusBarTranslucent: true,
            statusBarStyle: 'light',
            statusBarColor: colors.GreyScale.Black,
            headerTransparent: true,
            headerBackVisible: false,
            headerTitle: () => <LogoAcaso />,
        }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="ProfilePicture"
                component={ProfilePicture}
            />
        </Navigator>
    );
};

export default AppStack;