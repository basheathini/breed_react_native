import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/configureStore';
import MainScreen from './src/components/main_screen';
import ViewBreeds from './src/components/view_breeds';
import ViewImage from './src/components/view_image';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'Browse By Breed',
            }}
          />
          <Stack.Screen
            name="ViewBreeds"
            options={{
              title: 'Breeds',
            }}
            component={ViewBreeds}
          />
          <Stack.Screen
            name="ViewImage"
            options={{
              title: 'Full Image',
            }}
            component={ViewImage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
