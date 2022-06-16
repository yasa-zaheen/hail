// React
import React from "react";

// React-native
import { StyleSheet, Text, View } from "react-native";
import { Appearance, useColorScheme } from "react-native";

// Tailwind
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
  let colorScheme = useColorScheme();

  return (
    <View
      style={[
        colorScheme == "dark" ? tw`bg-black` : tw`bg-white`,
        tw`p-5 flex-1`,
      ]}
    >
      <Text style={tw`text-white`}>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
