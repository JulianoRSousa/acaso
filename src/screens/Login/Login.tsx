import { colors } from "@/theme";
import { View, Text } from "react-native";

const Login: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontFamily: 'Raleway-Bold', color: colors.Galaxy.White }}>Login</Text>
        </View>
    );
}

export default Login;