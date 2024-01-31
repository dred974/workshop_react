import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonDisplay = () => {
    const handlePress = () => {
      console.log("Bonjour");
    };
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>Button</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      top: 480,
      left: 890,
      width: 120,
      height: 70,
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'black',
      backgroundColor: 'pink',
      padding: 10,
    },
    text: {
      fontSize: 20,
      position: 'absolute',
      top: 20,
    },
})

export default ButtonDisplay;