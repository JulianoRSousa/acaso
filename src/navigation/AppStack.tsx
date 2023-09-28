import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/types/global';
import { HeaderLogoAcaso } from '@/components';
import { useTheme } from 'styled-components';
import Home from '@/screens/Home/Home';
import ProfilePicture from '@/screens/ProfilePicture/ProfilePicture';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    const theme = useTheme();
    return (
        <Navigator initialRouteName={'ProfilePicture'} screenOptions={{
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
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name="ProfilePicture"
                component={ProfilePicture}
            />
        </Navigator>
    );
};

export default AppStack;