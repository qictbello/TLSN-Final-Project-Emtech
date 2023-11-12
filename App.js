const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IntroScreen from "./screens/IntroScreen";
import Below500 from "./components/Below5001";
import Frame from "./screens/Frame";
import Budget from "./components/Budget";
import AdvancedRadius from "./components/AdvancedRadius";
import LoadingScreen from "./screens/LoadingScreen";
import GettingStarted2 from "./screens/GettingStarted2";
import GettingStarted1 from "./screens/GettingStarted1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "MeeraInimai-Regular": require("./assets/fonts/MeeraInimai-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IntroScreen"
              component={IntroScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Budget"
              component={Budget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdvancedRadius"
              component={AdvancedRadius}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted2"
              component={GettingStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted1"
              component={GettingStarted1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
