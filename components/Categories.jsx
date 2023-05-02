import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { urlFor } from "../sanity";
import sanityClient from "../sanity";

import "react-native-url-polyfill/auto";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "category"]

      `
    ).then(data => {
      setCategories(data)
    });
  }, []);


 

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
      {categories.map((category) => (
         <CategoryCard
         key={category._id}
         title={category.name}
         imgUrl={urlFor(category.image).width(200).url()}




         
       />
      ))}
      
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
