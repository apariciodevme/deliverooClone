import "react-native-url-polyfill/auto";


import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


import { useState } from "react";
import sanityClient from "../sanity";


const FeaturedRow = ({id, title, description}) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == 'restaurant']{
    ...,
    restaurants[]->{
    }
    
  }
  `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  

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



        {featuredCategories?.map(category => (
           <RestaurantCard
           id={category._id}
           key={category._id}
           imgUrl={category.image}
           title={category.name}
           rating={4.5}
           genre="Chicken"
           address={category.address}
           short_description="This is teh description mate, nandos innit"
           dishes={[]}
           long={20}
           lat={34}
           />
        ))}
  
      


      </ScrollView>

    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})