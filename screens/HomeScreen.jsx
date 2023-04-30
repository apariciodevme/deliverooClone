import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SearchBar } from "react-native-screens";

{
  /*----------Components---------*/
}
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 pt-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full p-6"
        />

        <View className="flex-1">
          <Text className="font-semibold text-gray-500 text-xs">
            Deliver now
          </Text>
          <Text className="font-semibold text-gray-900 text-lg">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/*-----------Search------------*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 rounded-2xl">
          <MagnifyingGlassIcon size={30} color={"gray"} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>

      {/*----------Body----------------*/}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/*--------Categories----------*/}
        <Categories />
        {/*-----------Featured row---------------*/}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone has been enjoying this tasty discounts"
          id="1234"
        />
        <FeaturedRow
          title="Offers for you!"
          description="Support your local restaurant tonight!"
          id="123556"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
