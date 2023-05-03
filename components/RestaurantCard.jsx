import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {

const navigation = useNavigation();

  return (
    <TouchableOpacity className="mr-3 bg-white shadow-sm rounded-xl" 
    onPress={() => {
       navigation.navigate('Restaurant', {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
       });
    }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-64 h-36 rounded-xl"
      />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={20} />
            <Text className="text-green-500">{rating}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
        <MapPinIcon color={'gray'} opacity={0.4} size={22}/>
        <Text className="text-xs text-gray-500 ">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
