import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem/CartItem";
import ProductsItem from "../../components/ProductsItem";

const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  return (
    <View style={{ flex: 1 }}>
       <ScrollView style={{ flex:1, marginBottom: height*0.12}}>

      <FlatList
         style={{backgroundColor: "#F5F5F5" }}
        data={productsGetir}
        renderItem={({ item }) => <CartItem product={item} />}
      />
      <Text style={{padding:15,fontWeight:'bold',color:'#5D3EBD'}}>Önerilen Ürünler</Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}
        style={{backgroundColor:'white'}}
      >
        {productsGetir.map((product, index) => (
          <ProductsItem key={index} item={product} />
        ))}
      </ScrollView>

    </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position:'absolute',
          bottom:0
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebc",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
          }}
        >
          <Text
            style={{
              color: "#5d3ebc",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            <Text>24,00</Text>
          </Text>
        </View>
      </View>
    </View>
            
  );
};

export default CartScreen
