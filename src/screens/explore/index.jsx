import React from 'react';
import {Text, View} from 'react-native';
import BottomBar from '../../components/bottomBar';

const ExploreScreen = ({navigation}) => {
  return (
    <>
      <Text>Explore Screen</Text>
      <BottomBar navigation={navigation} />
    </>
  );
};

export default ExploreScreen;
