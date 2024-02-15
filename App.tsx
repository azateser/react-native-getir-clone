import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>

    <View style={styles.statusBarBackground}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.container}>
     <RootNavigator />
    </SafeAreaView>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
   statusBarBackground : {
    backgroundColor: '#5d3ebc',
    height: 100,
  }
});
