import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

{
  /*React hooks*/
}

import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

{
  /*Sanity*/
}
import { urlFor } from "../sanity";

{
  /*Icons*/
}

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

import { SafeAreaView } from "react-native-safe-area-context";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";




import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 p-4 bg-gray-300 rounded-xl"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute p-2 bg-gray-100 rounded-full top-14 left-5 "
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row my-1 space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={20} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>
                {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={20} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500">Nearby • {address}</Text>
            </View>
          </View>
          <Text className="pb-4 mt-2 text-gray-500">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center flex-1 block p-4 mt-4 space-x-2 border-gray-100 border-y">
          <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} />
          <Text className="flex-1 font-semibold text-md">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        {/*Dishes*/}

        <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>
        {dishes.map((dish) => (
          <DishRow key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish.short_description}
          price={dish.price}
          image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
