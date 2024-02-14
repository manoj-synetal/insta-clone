import React from 'react';
import {Image, Text, View, useColorScheme} from 'react-native';
import BottomBar from '../../components/bottomBar';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = ({navigation}) => {
  const darkMode = useColorScheme() === 'dark';
  return (
    <>
      <View
        className={`${darkMode ? 'bg-black' : 'bg-white'} py-3 h-full pb-24`}>
        {/* Top Section */}
        <View className="px-3 flex flex-row items-center justify-between">
          <Text
            className={`${
              darkMode ? 'text-white' : 'text-slate-950'
            } tracking-wider text-lg font-semibold`}>
            i_hacker_manoj
          </Text>
          <View className="flex-row items-center space-x-5">
            <Feather name="plus-square" size={22} />
            <Feather name="menu" size={26} />
          </View>
        </View>

        {/* Image  & Followers & Following */}
        <View className="px-4 py-7 flex flex-row items-center justify-between">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{
              height: 75,
              borderRadius: 50,
              borderColor: 'red',
              width: 75,
            }}
          />

          <View className="flex-row space-x-10 pr-1">
            <View className="items-center space-y-0.5">
              <Text className="font-bold text-lg">9</Text>
              <Text className="text-sm">posts</Text>
            </View>

            <View className="items-center space-y-0.5">
              <Text className="font-bold text-lg">900</Text>
              <Text className="text-sm">followers</Text>
            </View>

            <View className="items-center space-y-0.5">
              <Text className="font-bold text-lg">5k</Text>
              <Text className="text-sm">following</Text>
            </View>
          </View>
        </View>

        {/* About */}
        <View>
          
        </View>
      </View>
      <BottomBar navigation={navigation} />
    </>
  );
};

export default ProfileScreen;
