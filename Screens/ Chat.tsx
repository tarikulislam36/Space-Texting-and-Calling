import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import tw from 'twrnc';

export default function Chat() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={tw`flex-1`}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-lg font-bold text-white`}>Chat Screen</Text>
      </View>
    </ImageBackground>
  );
}
