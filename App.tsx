import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <NavigationContainer>
        <View style={styles.statusBarBackground}>
          <AppLoading />
          <StatusBar barStyle="light-content" />
          <RootNavigator />
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  statusBarBackground: {
    minHeight: "100%",
    backgroundColor: "#5d3ebc",
    height: 100,
  },
});
