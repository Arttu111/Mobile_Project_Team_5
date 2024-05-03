import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Preferences from './Preferences';
import styles from "../styles/styles"

const Home = () => {
  const [preferencesVisible, setPreferencesVisible] = useState(false);

  const togglePreferences = () => {
    setPreferencesVisible(!preferencesVisible);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fcf0e4" }}>
      <View style={styles.settingsContainer}>
        <Text style={styles.homeText}>Settings</Text>
        <TouchableOpacity onPress={togglePreferences} style={styles.preferencesButton}>
          <Text style={styles.buttonText}>Edit Preferences</Text>
        </TouchableOpacity>
        {preferencesVisible && <Preferences />}
      </View>
    </ScrollView>
  );
};

export default Home;

