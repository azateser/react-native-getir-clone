import React, { useState } from "react";
import { FlatList, Image, Dimensions, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const BannerCarousel = () => {
  const [banners, setBanners] = useState([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
  ]);

  const renderBannerItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: width * 0.9,
        height: height * 0.25,
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
      }}
    >
      <Image
        source={{ uri: item }}
        style={{
          width: width * 0.85 ,
          height: height * 0.2,
          borderRadius: 12,
          resizeMode: "cover",
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "stretch",
         
        }}
        pagingEnabled
        snapToInterval={width * 0.9}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default BannerCarousel;
