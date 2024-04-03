import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import Footer from './Footer';
import { SafeAreaView,Text } from 'react-native';
import Search from './Search';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}> 
       <Header title={<Text>Library app</Text>} />
      <Text>Open up App.js to start working on your app!</Text>
      <Search/>
      <StatusBar style="auto" />
    <Footer/>
    </SafeAreaView>
  );
}

