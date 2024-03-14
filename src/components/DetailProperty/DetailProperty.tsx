import React from "react";
import { Text } from "react-native";
import Detaylar from "./pages/Detaylar";

import { Tab, TabView } from "@rneui/themed";
import Onerilenler from "./pages/Onerilenler";
import Icindekiler from "./pages/Icindekiler";
import BesinDegerleri from "./pages/BesinDegerleri";

const DetailProperty = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        style={{
          backgroundColor: "white",
          borderBottomColor: "#E2E2E2",
          paddingLeft: 10,
          height: 45,
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }}
        dense
        indicatorStyle={{
          backgroundColor: "#5D3EBD",
          height: 2,
        }}
        titleStyle={(active) => ({
          color: active ? "#5D3EBD" : "#808B99",
          fontWeight: "bold",
          fontSize: 13,
          fontFamily: active ? "Inter_700Bold" : "Inter_600SemiBold",
        })}
        scrollable
      >
        <Tab.Item title="Önerilenler" />
        <Tab.Item title="Detaylar" />
        <Tab.Item title="İçindekiler" />
        <Tab.Item title="Besin Değerleri" />
        <Tab.Item title="Kullanım" />
        <Tab.Item style={{ paddingRight: 10 }} title="Ek Bilgiler" />
      </Tab>

      {index === 0 && <Onerilenler />}
      {index === 1 && <Detaylar />}
      {index === 2 && <Icindekiler />}
      {index === 3 && <BesinDegerleri />}
      {index === 4 && <Text>Kullanım İçeriği</Text>}
      {index === 5 && <Text>Ek Bilgiler İçeriği</Text>}
    </>
  );
};

export default DetailProperty;
