import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const Loading = () => (
  <View style={styles.loadingView}>
    <ActivityIndicator size="large" color="red" />
    <Text style={styles.loadingText}>Fetching data...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    color: '#5637DD',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Loading;
