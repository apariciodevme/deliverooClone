import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>HomeScreen</Text>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
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
            Current Location{" "}
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

          <UserIcon size={35} color='#00CCBB'/>

      </View>

          <View>
            <View></View>
            <AdjustmentsVerticalIcon size={30} color="#00CCBB"/>

          </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
