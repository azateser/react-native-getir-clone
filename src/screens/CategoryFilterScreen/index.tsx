import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native';
import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import { Category } from '../../interfaces';
import ProductsContainer from '../../components/ProductsContainer';

export const CategoryFilterScreen = (props) => {
    const [category, setCategory] = useState<Category>(props.route.params.category)
  return (
    <ScrollView>
        <CategoryFiltering category={category} />
        <TypeFiltering />
        <ProductsContainer />
    </ScrollView>
  )
}
