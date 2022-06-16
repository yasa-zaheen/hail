// React
import { Icon } from "@rneui/themed";
import React from "react";

// React-native
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Appearance, useColorScheme } from "react-native";

// Tailwind
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Hail a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eats",
  },
];

const NavOptions = ({ navigation }) => {
  let colorScheme = useColorScheme();

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            colorScheme == "dark" ? tw`bg-gray-800` : tw`bg-gray-100`,
            tw`mr-5 mt-5 rounded-xl p-5 flex items-center justify-center`,
          ]}
          onPress={() => {
            navigation.navigate(item.screen);
          }}
        >
          <Image
            style={{
              height: 120,
              width: 120,
              resizeMode: "contain",
            }}
            source={{
              uri: item.image,
            }}
          />
          <View style={tw`flex flex-row justify-center items-center`}>
            <Text
              style={colorScheme == "dark" ? tw`text-white` : tw`text-black`}
            >
              {item.title}
            </Text>
            <Icon
              name="arrow-forward"
              color="white"
              type="ion-icons"
              containerStyle={tw`ml-2`}
            />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;
