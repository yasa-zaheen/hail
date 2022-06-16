// React
import React from "react";

// React-native
import { StyleSheet, Text, View, Image } from "react-native";
import { Appearance, useColorScheme } from "react-native";

// Tailwind
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

// Components

const HomeScreen = ({ navigation }) => {
  let colorScheme = useColorScheme();

  return (
    <View
      style={[colorScheme == "dark" ? tw`bg-black` : tw`bg-white`, tw`p-5`]}
    >
      {/* Header */}
      <Text
        style={[
          colorScheme == "dark" ? tw`text-white` : tw`text-black`,
          tw`text-4xl font-bold`,
        ]}
      >
        Hail
      </Text>

      {/* NavOptions */}
      <NavOptions navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
