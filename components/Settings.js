import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Preferences from './Preferences';
import styles from "../styles/styles"
import { ImageBackground } from 'react-native';
import background from '../assets/background3.jpg';

const Home = () => {
  const [preferencesVisible, setPreferencesVisible] = useState(false);

  const togglePreferences = () => {
    setPreferencesVisible(!preferencesVisible);
  };

  return (
    <ImageBackground source={background} style={{flex: 1}} >
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.settingsContainer}>
        <Text style={styles.homeText}>Settings</Text>
        <TouchableOpacity onPress={togglePreferences} style={styles.preferencesButton}>
          <Text style={styles.buttonText}>Edit Preferences</Text>
        </TouchableOpacity>
        {preferencesVisible && <Preferences />}
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default Home;

