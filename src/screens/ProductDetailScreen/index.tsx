import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Product } from "../../interfaces";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty/DetailProperty";
import CardButton from "../../components/CardButton/CardButton";
import { SafeAreaView } from "react-native-safe-area-context";

const PorductDetailScreen = (props) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={{flex:1}}>
       <ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}> 
      <ImageCarousel images={product.images} />
      <DetailBox
      price={product.fiyat}
      name={product.name}
      quantity={product.miktar}
      />
      <DetailProperty />
      </ScrollView>
      <SafeAreaView>

      <CardButton />
      </SafeAreaView>
    </View>
  );
};

export default PorductDetailScreen;
