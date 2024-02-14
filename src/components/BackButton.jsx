import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackButton = ({onPress}) => {
  onPress;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <AntDesign name="arrowleft" size={22} />
    </TouchableOpacity>
  );
};

export default BackButton;
