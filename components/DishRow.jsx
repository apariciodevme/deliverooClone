import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";


const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity>
   <View>
  <Text>Dish Row</Text>
   </View>
    </TouchableOpacity>
  );
};

export default DishRow;

