import React from "react";
// Navigation
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Redux
import { Provider } from "react-redux";
// Screens / Components
import ContactsScreen from "./src/screens/ContactsScreen"
import ContactDetailsScreen from "./src/screens/ContactDetailsScreen"
// Store init
import Store from './src/Store'
// Stack creation
const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            component={ContactsScreen}
            options={{ title: "Contacts" }}
          />
          <Stack.Screen
            name="Contact Details"
            component={ContactDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}