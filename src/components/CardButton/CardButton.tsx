import React from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

const {height, width} = Dimensions.get('window')
const CardButton = () => {
  return (
      
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:height*0.125,position: 'absolute',bottom:0,width:'100%',backgroundColor:'white'}}>
      <TouchableOpacity style={{backgroundColor:'#5D39C1',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
    <Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>
    </TouchableOpacity>
</View>
  )
}

export default CardButton