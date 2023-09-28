import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AuthContext from "@/context/auth";
import { useContext } from "react";



const Routes = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <AppStack /> : <AuthStack />
};
export default Routes;
