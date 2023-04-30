

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
        <Image
        source={{
            uri: imgUrl
        }}
        className="rounded-xl h-20 w-20 "
        />
      <Text className=" absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})