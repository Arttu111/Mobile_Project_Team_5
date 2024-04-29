import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './components/Home';
import Search from './components/Search';
import BookList from './components/BookList';
import Book from './components/Book';
import BookDetails from './components/BookDetails';
import Preferences from './components/Preferences';
import PreferenceList from './components/PreferenceList';
import Loading from './components/Loading';
import Settings from './components/Settings';

const Stack = createStackNavigator();

export default function App() {
       //Function to clear localstorage user preferences on app launch (for testing)
      //     useEffect(() => {
      //      const clearPreferencesOnLaunch = async () => {
      //          try {
      //              await AsyncStorage.removeItem('userPreferences');
      //              console.log('User preferences cleared on app launch.');
      //              console.log('Preferences:', await AsyncStorage.getItem('userPreferences'));
      //          } catch (error) {
      //              console.log('Error clearing preferences on app launch:', error);
      //         }
      //      };

      //      clearPreferencesOnLaunch();
      //  }, []);

     const [initialRoute, setInitialRoute] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const determineInitialRoute = async () => {
      
         try {
           const preferences = await AsyncStorage.getItem('userPreferences');
           console.log('Preferences:', preferences);
           return preferences ? 'Home' : 'Preferences';
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
   <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="BookList" component={BookList} />
          <Stack.Screen name="BookCover" component={Book} />
          <Stack.Screen name="Details" component={BookDetails} />
          <Stack.Screen name="PreferenceList" component={PreferenceList} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  
  );
}