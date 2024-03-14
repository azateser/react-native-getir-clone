import React from 'react'
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';

type productItemType={
    item: Product;
}

const {width, height} = Dimensions.get('window')
const ProductsItem = ({item}:productItemType) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetails', {product:item})}
    style={{
        width: width*0.28,
        marginTop:12,
        height: height*0.24,
        marginLeft:12,
        marginBottom:6,
    }}
    >
        <Image 
        style={{width:width*0.28, height:width*0.28, borderRadius: 12, borderWidth: 1, borderColor: '#edededfd'}}
        source={{uri: item.image}} />

        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 11.5, color: "#747990", textDecorationLine: 'line-through'}}>
                <Text>{"\u20BA"}</Text>{item.fiyat}
            </Text>
            <Text style={{color: '#5D3EBD', fontWeight: 'bold', fontSize: 12, marginLeft: 4,}}>
            <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
            </Text>
        </View>
        <Text style={{fontSize:12,fontWeight:'600',marginTop:5}}>{item.name}</Text>
        <Text style={{color: '#63677b', fontSize:12, marginTop:4, fontWeight: '500'}}>{item.miktar}</Text>

        <TouchableOpacity  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowRadius: 3.5, shadowOpacity:0.15, shadowColor: '#5D3EBD', shadowOffset: {width: -1, height:2}, width: 30, height:30, backgroundColor: 'white', position: 'absolute', right: -6, top: -6, borderRadius: 8}}>
            <Entypo name='plus' size={18} color="#5D3EBD" />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}


export default ProductsItem