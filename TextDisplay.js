import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TextDisplay = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>
            Écran1
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 300,
        left: 900,
    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default TextDisplay;