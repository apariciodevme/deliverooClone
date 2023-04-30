

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/*CategoryCard*/}
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title="test" imgUrl='https://links.papareact.com/gn7'/>
   

    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})