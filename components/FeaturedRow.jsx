import "react-native-url-polyfill/auto";


import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


import { useState } from "react";
import sanityClient from "../sanity";


const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == 'restaurant']{
    ...,
    restaurants
    
  }
  `
      )
      .then((data) => {
        setRestaurants(data);
      });
  }, []);
  
  console.log(restaurants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"}/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      className="pt-4"
      >


        {/*Restaurant Cards*/}



        {restaurants?.map(restaurant => (
           <RestaurantCard
           id={restaurant._id}
           key={restaurant._id}
           imgUrl={restaurant.image}
           title={restaurant.name}
           rating={restaurant.rating}
           genre={restaurant.genre}
           address={restaurant.address}
           short_description={restaurant.short_description}
           dishes={restaurant.dishes}
           long={restaurant.long}
           lat={restaurant.lat}
           />
        ))}
  
      


      </ScrollView>

    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})