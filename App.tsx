import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import * as React from 'react';
import {About} from './src/pages/About/About';
import {Category} from './src/pages/Category/Category';
import {Settings} from './src/pages/Settings/Settings';
import {View_} from './src/pages/View/View';
import {PregnaCare} from './src/Pregnacare';

const Stack = createNativeStackNavigator();
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider config={config}>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={PregnaCare}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ViewData"
            component={View_}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
