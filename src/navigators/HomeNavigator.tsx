import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Image } from 'react-native'

const Stack = createStackNavigator()
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen 
        name='HomePage'
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#5d3ebc', height: 44},
          headerTitle: () => (
            <Image width={62} height={28} source={{uri: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/getirlogo-freelogovectors.net_.png"}} />
          )
        }}
       />
    </Stack.Navigator>
  )
}

export default HomeNavigator