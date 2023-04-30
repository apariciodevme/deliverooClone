

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
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
        <RestaurantCard
         id={123}
         imgUrl='https://links.papareact.com/gn7'
         title="Nandos"
         rating={4.5}
         genre="Chicken"
         address="123 main street"
         short_description="This is teh description mate, nandos innit"
         dishes={[]}
         long={20}
         lat={34}
         />
        <RestaurantCard
         id={123}
         imgUrl='https://links.papareact.com/gn7'
         title="Nandos"
         rating={4.5}
         genre="Chicken"
         address="123 main street"
         short_description="This is teh description mate, nandos innit"
         dishes={[]}
         long={20}
         lat={34}
         />
        <RestaurantCard
         id={123}
         imgUrl='https://links.papareact.com/gn7'
         title="Nandos"
         rating={4.5}
         genre="Chicken"
         address="123 main street"
         short_description="This is teh description mate, nandos innit"
         dishes={[]}
         long={20}
         lat={34}
         />



      </ScrollView>

    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})