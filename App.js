// Expo
import { StatusBar } from "expo-status-bar";

// React-native
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Appearance, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

// Tailwind
import tw from "tailwind-react-native-classnames";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  let colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView
          style={[
            colorScheme == "dark" ? tw`bg-black` : tw`bg-white`,
            tw`flex-1`,
          ]}
        >
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor:
                  colorScheme == "dark" ? tw`bg-black` : tw`bg-white`,
              },
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
