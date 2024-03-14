import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
 const onViewRef = React.useRef(( viewableItems : any) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  return (
    <View style={{
      alignItems: "center",
      width: "100%",
      backgroundColor: "white",
      height: height * 0.32,
      paddingTop: 25,
    }}>

    <FlatList
      data={images}
      style={{ width: width * 0.5, height: height * 0.26 }}
      renderItem={({ item }) => (
          <Image
          source={{ uri: item }}
          style={{ width: width * 0.5, height: height * 0.26, resizeMode: "cover" }}
          />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.5 + 20}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          >
    </FlatList>
    <View>
      <View 
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
      >
        {
          images.map((image, index) => (
            <View 
            key={index} 
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 4,
              backgroundColor: index === activeIndex ? "#5D3EBD" : "#a8a0c342",
            }}
             />
            ))
        }
      </View>
    </View>
        </View>
  );
};


export default ImageCarousel;
