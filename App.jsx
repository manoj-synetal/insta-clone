import React from 'react';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import ExploreScreen from './src/screens/explore';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from './src/screens/chats';
import ChatDetail from './src/screens/chats/ChatDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* Screens Naviigations */}
      <NavigationContainer></NavigationContainer>

      {/* Tab Navigations */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              display: 'none',
            },
          }}
          initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="Plus" component={ExploreScreen} />
          <Tab.Screen name="Reel" component={ExploreScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="ChatDetail" component={ChatDetail} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
