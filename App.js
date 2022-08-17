import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Onboarding, TransactionDetail } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}