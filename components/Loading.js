import React from 'react';
import { View, Text} from 'react-native';
import styles from '../styles/styles';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <View style={styles.animation}>
      <LottieView style={{flex: 1}} source={require('../assets/Animation - 1714668983215.json')} autoPlay loop />
      </View>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

export default Loading;