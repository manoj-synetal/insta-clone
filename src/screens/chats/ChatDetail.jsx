import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import BackButton from '../../components/BackButton';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const ChatDetail = ({navigation}) => {
  const darkMode = useColorScheme() === 'dark';
  const messaageCaard = () => {
    return (
      <View className="flex px-4 py-3 items-center space-x-3 flex-row">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={{
            height: 20,
            width: 20,
            borderRadius: 50,
          }}
        />
        <Text
          className={`bg-blue-600 px-3 text-xs text-white tracking-wider rounded-full py-1 mr-auto`}>
          How are you men ?
        </Text>
      </View>
    );
  };
  return (
    <View className={`${darkMode ? 'bg-black' : 'bg-white'} py-3 h-full pb-16`}>
      {/* Top Section */}
      <View className="px-3 flex justify-between flex-row items-center ">
        <View className="flex flex-row justify-between space-x-3 items-center py-3">
          <BackButton onPress={() => navigation.navigate('Chats')} />
          <View className="flex-row items-center space-x-3">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
              }}
              style={{
                height: 35,
                width: 35,
                borderRadius: 50,
              }}
            />
            <View>
              <Text
                className={`${
                  darkMode ? 'text-white' : 'text-slate-950'
                } text-xs tracking-wide`}>
                aulaaddmeri
              </Text>
              <Text className={`tracking-wider text-xs`}>Active 5h ago</Text>
            </View>
          </View>
        </View>
        {/* <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Feather name="camera" size={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="camera" size={22} />
          </TouchableOpacity>
        </View> */}
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Array(30).fill({})}
        renderItem={messaageCaard}
      />

      {/* Chat Input */}
      <View className="absolute bottom-0 inset-x-0 px-3 pb-2 pt-1">
        <View
          className={`${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          } overflow-hidden relative flex flex-row rounded-full`}>
          {/* <TouchableOpacity
            activeOpacity={0.6}
            className="bg-blue-400 ml-2 mr-1 rounded-full self-center text-center p-2">
            <Entypo name="camera" size={15} color="white" />
          </TouchableOpacity> */}
          <TextInput
            placeholder="Message..."
            multiline={true}
            className="py-2 pl-3 w-full"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-blue-400 absolute right-2 rounded-full self-center text-center p-2">
            <Feather name="send" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatDetail;
