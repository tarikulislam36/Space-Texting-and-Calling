import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import tw from 'twrnc';
import Chat from './ Chat';
import Profile from './ Profile';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Chat"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: [
              tw` bg-red-800 rounded-t-3xl`,
              { height: 60 },
            ],
            tabBarLabelStyle: tw`text-sm bg-red-800 font-semibold`,
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: '#6b7280',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Chat') {
                iconName = 'chatbubbles-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
