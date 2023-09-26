import AppStack from "./AppStack";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";



const Routes = () => {
    const token = false

    return (
        <NavigationContainer>
            {!token ? <AuthStack /> : <AppStack />}
        </NavigationContainer >
    )
};
export default Routes;
