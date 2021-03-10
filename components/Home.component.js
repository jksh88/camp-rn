import React, { useState } from 'react';
import { View, Text } from 'react-native';
const Home = (props) => {
  return (
    <View>
      <Text>HOME component</Text>
    </View>
  );
};

Home.navigationOptions = () => ({
  title: 'Home',
});
export default Home;
