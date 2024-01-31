import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputD = () => {
    const [text, setText] = useState('');
  
    const handleChangeText = (inputText) => {
      setText(inputText);
    };
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Ceci est un champ de texte"
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      position: 'absolute',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#acd7e5',
      top: 380,
      left: 720,
      color: '#93b4bf',
      width: 450,
      backgroundColor: '#acd7e5'
    },
})

export default TextInputD;