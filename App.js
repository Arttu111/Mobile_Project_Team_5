import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Footer from './components/Footer';
import { SafeAreaView,Text } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}> 
       <Header title={<Text>Library app</Text>} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    <Footer/>
    </SafeAreaView>
  );
}

