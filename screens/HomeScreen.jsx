/* polyfills */
/** URL polyfill */
import "react-native-url-polyfill/auto";

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

import React, { useEffect, useLayoutEffect } from "react";

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import { SearchBar } from "react-native-screens";

import { useState } from "react";
import sanityClient from "../sanity";

{
  /*----------Components---------*/
}
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == 'featured']{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
    
  }
  `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row items-center pt-4 pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="p-6 bg-gray-300 rounded-full h-7 w-7"
        />

        <View className="flex-1">
          <Text className="text-xs font-semibold text-gray-500">
            Deliver now
          </Text>
          <Text className="text-lg font-semibold text-gray-900">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/*-----------Search------------*/}
      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row flex-1 p-2 space-x-2 bg-gray-200 rounded-2xl">
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

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
