// Expo
import { StatusBar } from "expo-status-bar";

// React-native
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Appearance, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

// Tailwind
import tw from "tailwind-react-native-classnames";

// Screens
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  let colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          style={[
            colorScheme == "dark" ? tw`bg-black` : tw`bg-white`,
            tw`flex-1`,
          ]}
        >
          <HomeScreen />
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
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
