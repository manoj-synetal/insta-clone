import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {Text, TouchableOpacity, View, useColorScheme} from 'react-native';

const BottomBar = ({navigation}) => {
  const darkMode = useColorScheme() === 'dark';

  // bottom navs
  const navs = [
    {title: 'Home', icon: <Entypo name="home" size={25} />},
    {title: 'Search', icon: <Feather name="search" size={25} />},
    {title: 'Plus', icon: <Feather name="plus-square" size={25} />},
    {title: 'Reel', icon: <Entypo name="video-camera" size={25} />},
    {
      title: 'Profile',
      icon: <Feather name="user" size={25} />,
    },
  ];

  return (
    <View
      className={`absolute bottom-0 ${
        darkMode ? 'bg-black' : 'bg-white'
      }  flex justify-between border-t ${
        darkMode ? 'border-slate-900' : 'border-slate-100'
      }  flex-row inset-x-0 px-5 py-3`}>
      {navs.map(item => {
        return (
          <View key={item.title}>
            <TouchableOpacity activeOpacity={0.3}>
              <Text
                onPress={() => navigation.navigate(item.title)}
                className={`${
                  darkMode ? 'text-white' : 'text-slate-950'
                } text-lg`}>
                {item.icon}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default BottomBar;
