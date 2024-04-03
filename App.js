import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context';

import Home from './components/Home';
import Search from './components/Search';
import BookList from './components/BookList';
import Book from './components/Book';
import BookDetails from './components/BookDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="BookList" component={BookList} />
          <Stack.Screen name="BookCover" component={Book} />
          <Stack.Screen name="Details" component={BookDetails} />

        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}