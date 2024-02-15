import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem";

import categoriesGetir from "../../../assets/categoriesGetir";

import { Category } from "../../interfaces";

const MainCategories = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default MainCategories;
