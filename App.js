import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './components/Home';
import Search from './components/Search';
import BookList from './components/BookList';
import Book from './components/Book';
import BookDetails from './components/BookDetails';
import Preferences from './components/Preferences';
import PreferenceList from './components/PreferenceList';
import Loading from './components/Loading';
import Settings from './components/Settings';
import FullscreenCover from './components/FullscreenCover';

import './global.js'

const Stack = createStackNavigator();

const navigationRef = React.createRef();

export default function App() {
     const [initialRoute, setInitialRoute] = useState(null);
     const [loading, setLoading] = useState(true);

      useEffect(() => {
        const determineInitialRoute = async () => {
      
          try {
            const preferences = await AsyncStorage.getItem('userPreferences');
            console.log('Preferences:', preferences);
            return preferences && JSON.parse(preferences).length > 0 ? 'Home' : 'Preferences';
          } catch (error) {
            console.log('Error determining initial route:', error);
            return null;
          }
        };

        determineInitialRoute().then(route => {
          setInitialRoute(route);
          setLoading(false);
          console.log('Initial route set to:', route);
        });
      }, []);

      if (loading) {
        return <Loading />;
      }
      console.log(initialRoute)

  return (
    <AppProvider>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <MaterialCommunityIcons
                name="cog"
                size={24}
                color="black"
                style={{ marginRight: 20 }}
                onPress={() => navigationRef.current.navigate('Settings')}
              />
            ),
            headerLeft:null
          }}
        />
        <Stack.Screen name="Preferences" component={Preferences}/>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="BookList" component={BookList} options={({ route }) => ({ title: "Search: " + route.params.name })} />
        <Stack.Screen name="BookCover" component={Book} />
        <Stack.Screen name="Details" component={BookDetails} />
        <Stack.Screen name="PreferenceList" component={PreferenceList} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerTitle: "" }} />
        <Stack.Screen name="FullscreenCover" component={FullscreenCover} options={({ route }) => ({ title: "Cover: " + route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  </AppProvider>
  );
}