import React from 'react';
import { View, Text} from 'react-native';
import styles from '../styles/styles';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
    </View>
  );
}

export default Loading;