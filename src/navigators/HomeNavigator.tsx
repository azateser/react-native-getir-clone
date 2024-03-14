import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image, Text, TouchableOpacity, Dimensions, View } from "react-native";
import { CategoryFilterScreen } from "../screens/CategoryFilterScreen";
import PorductDetailScreen from "../screens/ProductDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen/CartScreen";

const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();
const MyStack = ({ navigation, route }: any) => {
  React.useLayoutEffect(() => {
    const routeName: any = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5d3ebc", height: 92 },
          headerTitle: () => (
            <Image
              width={62}
              height={28}
              source={{
                uri: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/getirlogo-freelogovectors.net_.png",
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#5d3ebc",
            height: 92,
            shadowOpacity: 0,
          },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürünler
            </Text>
          ),

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/cart.png")}
                style={{ width: 23, height: 23, marginLeft: 6 }}
              />
              <View
                style={{ width: 5, height: 30, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#F3EFFE",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5d3ebc", fontWeight: "bold", fontSize: 12 }}
                >
                  {"\u20BA"}24,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={PorductDetailScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5d3ebc", height: 92 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />


      <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerTintColor: "white",
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "#5d3ebc", height: 92 },
        headerTitle: () => (
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
            Sepetim
          </Text>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: 12 }}
          >
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{ paddingRight: 12 }}>
            <Ionicons
              name="trash"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        ),
      }}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator({ navigation, route }: any) {
  return <MyStack navigation={navigation} route={route} />;
}
