import React from 'react'
import { Text, View } from 'react-native'
import ProductsItem from '../ProductsItem'
import productsGetir from '../../../assets/productsGetir'
const ProductsContainer = () => {
  return (
    // Main View
    <View>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderBottomWidth:1, borderBottomColor: '#e2e2e2'}}>
            {
                productsGetir.slice(0,2).map((item) => (
                    <ProductsItem key={item.id} item={item} />
                ))
            }
        </View>

        <Text style={{color: '#3e3e3e', fontWeight: 'bold', padding: 12, paddingTop: 20, fontSize: 12}}>Çubuk</Text>

        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', flexWrap: 'wrap', flex: 1, paddingVertical: 10, borderBottomWidth:1, borderBottomColor: '#e2e2e2'}}>
        {
                productsGetir.slice(2).map((item) => (
                    <ProductsItem key={item.id} item={item} />
                ))
            }
        </View>
    </View>
  )
}

export default ProductsContainer