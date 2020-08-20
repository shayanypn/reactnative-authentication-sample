import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import PanelScreen from "../screens/PanelScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Panel" component={PanelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
