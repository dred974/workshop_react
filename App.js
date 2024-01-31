import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import TextDisplay from './TextDisplay';
import ButtonDisplay from './ButtonDisplay';
import TextInputD from './TextInputD';

export default function App() {
  return (
    <View>
      <TextDisplay />
      <ButtonDisplay />
      <TextInputD />
    </View>
  );
}
