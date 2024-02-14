import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useColorScheme,
  Animated,
  TouchableOpacity,
} from 'react-native';
import BottomBar from '../../components/bottomBar';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = ({navigation}) => {
  const {navigate} = navigation;
  const darkMode = useColorScheme() === 'dark';
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = 1000; // Adjust the height according to your header size

  const translateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  const storyCircleItem = ({item}) => {
    return (
      <View className="pr-2.5">
        <View className="border-2 border-red-400 rounded-full">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{
              height: 65,
              borderRadius: 50,
              borderColor: 'red',
              width: 65,
            }}
          />
        </View>
        <Text className="text-center pt-2 tracking-wider" style={{fontSize: 9}}>
          i_hacker_m...
        </Text>
      </View>
    );
  };

  const feedCardItem = ({item}) => {
    return (
      <View className="py-3">
        {/* Top Section */}
        <View
          className={`flex w-full px-3 border-b ${
            darkMode ? 'border-slate-900' : 'border-slate-100'
          }  pb-2 flex-row justify-between items-center`}>
          <View className="flex-row items-center">
            <View className="border border-red-400 rounded-full">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
                }}
                style={{
                  height: 28,
                  borderRadius: 50,
                  width: 28,
                }}
              />
            </View>
            <Text className="text-center pl-2 text-xs tracking-wider">
              i_hacker_manoj
            </Text>
          </View>
          <Entypo name="dots-three-vertical" className="text-xl" />
        </View>

        {/* Post */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={{
            height: 350,
            // resizeMode: 'cover',
            width: '100%',
          }}
        />

        {/* Action Button */}
        <View className="px-3 flex flex-row justify-between item-center py-2.5">
          <View className="flex-row space-x-4">
            <Feather name="heart" size={22} />
            <Feather name="message-circle" size={22} />
            <Feather name="send" size={22} />
          </View>
          <Feather name="bookmark" size={22} />
        </View>

        {/* Comments, Likes , Ago */}
        <View className="px-3">
          <Text
            className={`text-xs ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            } tracking-wider`}>
            48 Likes
          </Text>
          <Text
            className={`text-xs ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            } py-0.5 tracking-wider`}>
            View all 3 comments
          </Text>
          <Text
            className={`text-xs ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }  tracking-wider`}>
            2 hour ago
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View
        className={`${darkMode ? 'bg-black' : 'bg-white'} py-3 h-full pb-14`}>
        {/* Top Header Section */}
        <Animated.View
          style={[{transform: [{translateY}]}, {zIndex: 2}]}
          className="flex flex-row px-3 pb-2 justify-between items-center">
          <Text className={`tracking-widest text-lg font-sans`}>Sociala.</Text>
          <View className="items-center flex-row space-x-5">
            <Feather name="heart" size={22} />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate('Chats')}>
              <Fontisto name="hipchat" size={22} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Stories Section */}
        <View
          className={`border-b px-2 flex flex-row py-1.5 ${
            darkMode ? 'border-slate-900' : 'border-slate-100'
          } `}>
          {/* Own Story */}
          <View className="pr-2.5">
            <View
              className={`border ${
                darkMode ? 'border-slate-500' : 'border-slate-200'
              }  rounded-full`}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
                }}
                style={{
                  height: 65,
                  borderRadius: 50,
                  borderColor: 'red',
                  width: 65,
                }}
              />
              <Text
                className={`absolute border-2 ${
                  darkMode ? 'border-black' : 'border-white'
                } w-6 pt-0.5 h-6 bottom-0 -right-1.5 text-white bg-blue-400 flex justify-center text-center rounded-full items-center`}>
                +
              </Text>
            </View>
            <Text
              className="text-center pt-2 tracking-wider"
              style={{fontSize: 9}}>
              Your Story
            </Text>
          </View>

          {/* Friend's Story */}
          <FlatList
            data={Array(10).fill({})}
            renderItem={storyCircleItem}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        {/* Feed Section */}
        <FlatList
          data={Array(10).fill({})}
          showsVerticalScrollIndicator={false}
          renderItem={feedCardItem}
        />
      </View>
      <BottomBar navigation={navigation} />
    </>
  );
};

export default HomeScreen;
