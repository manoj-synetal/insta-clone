import React from 'react';
import {Text, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View>
      <Text onPress={() => navigate('Home')}>Login Screen</Text>
    </View>
  );
};

export default LoginScreen;
