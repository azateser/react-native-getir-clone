import React from 'react'
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { Category } from '../../interfaces';

const {width, height} = Dimensions.get('window')


type categoryItemProps = {
    category: Category
}

const CategoryItem = ({category}: categoryItemProps) => {
  return (
    <TouchableOpacity style={{width: width*0.24, height: width*0.24,marginTop: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
    <Image style={{width: width*0.18, height: width*0.18, borderRadius: 8}} source={{uri: category.src}} />
    <Text style={{fontSize: 12, color: '#616161', fontWeight: '500'}}>{category.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem