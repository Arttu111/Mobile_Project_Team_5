import { StatusBar, } from 'expo-status-bar';
import Header from './Header';
import Footer from './Footer';
import { SafeAreaView,Text } from 'react-native';
import Search from './Search';
import styles from '../styles/styles';

import {Image } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 ,backgroundColor:"#fcf0e4"}}> 
       <Header title={<Text>Library app</Text>} />
      <Text style={styles.homeText}>Search books from our library!</Text>
      <Search/>
      <Text style={styles.summaryText}>Explore our library's vast collection! Search for books by title, author, or genre. Find your next read easily with our app.</Text>

      <Image
        source={require('../images/Book.jpg')} 
        style={{ width: '100%', height: 200, resizeMode: 'cover', marginTop:100 }}
      />

      <StatusBar style="auto" />
    <Footer/>
    </SafeAreaView>
  );
}

