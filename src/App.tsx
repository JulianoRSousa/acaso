import Routes from '@/navigation/Routes';
import { ThemeProvider } from 'styled-components';
import light from '@/theme/light';
import { AuthProvider } from './context/auth';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
    return (
        <ThemeProvider theme={light}>
            <NavigationContainer>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default App;