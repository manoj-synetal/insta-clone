import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import BackButton from '../../components/BackButton';
import Feather from 'react-native-vector-icons/Feather';

const Chats = ({navigation}) => {
  const {navigate, goBack} = navigation;
  const darkMode = useColorScheme() === 'dark';

  const chatCardItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate('ChatDetail')}>
        <View className="flex flex-row justify-between items-center py-3">
          <View className="flex-row space-x-3">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
              }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
            />
            <View>
              <Text
                className={`${
                  darkMode ? 'text-white' : 'text-slate-950'
                } text-sm tracking-wide`}>
                aulaaddmeri
              </Text>
              <Text className={`tracking-wider text-xs`}>Seen 1h ago</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Feather name="camera" size={22} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className={`${darkMode ? 'bg-black' : 'bg-white'} py-3 h-full pb-24`}>
      {/* Top Section */}
      <View className="px-3 flex flex-row items-center space-x-5">
        <BackButton onPress={() => goBack()} />
        <Text
          className={`${
            darkMode ? 'text-white' : 'text-slate-950'
          } tracking-wider text-lg font-semibold`}>
          i_hacker_manoj
        </Text>
      </View>

      {/* Heading */}
      <View className="px-3">
        <View className=" flex flex-row justify-between items-center py-5">
          <Text
            className={`${
              darkMode ? 'text-white' : 'text-slate-950'
            } tracking-wide`}>
            Messages
          </Text>
          <Text className={`text-blue-500 tracking-wide`}>Requests</Text>
        </View>
        {/* Chat Card */}
        <FlatList
          data={Array(20).fill({})}
          renderItem={chatCardItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Chats;
