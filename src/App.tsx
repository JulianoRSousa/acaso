import Routes from '@/navigation/Routes';
import { ThemeProvider } from 'styled-components';
import light from '@/theme/light';
import { AuthProvider } from './context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: 'always',
            refetchOnMount: true,
            retry: 1,
            staleTime: 10 * 1000,
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={light}>
            <NavigationContainer>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </QueryClientProvider>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default App;