import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {About} from './src/pages/About/About';
import {Category} from './src/pages/Category/Category';
import {ImageView} from './src/pages/Image/Image';
import {Search} from './src/pages/Search/Search';
import {Video} from './src/pages/Video/Video';
import {View_} from './src/pages/View/View';
import {PregnaCare} from './src/Pregnacare';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={PregnaCare} />
        <Stack.Screen name="Profile" component={About} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ImageView" component={ImageView} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="View" component={View_} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
