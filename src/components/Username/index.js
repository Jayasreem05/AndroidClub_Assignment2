import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Username() {
    return (
        <TextInput
            placeholder='Enter UserName'
            maxLength={20}
            style={styles.box}
            placeholderTextColor={'white'}
        />

    );
} const styles = StyleSheet.create({
    box: {
        color: 'white',
        height: 50,
        width: '80%',
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        padding: 14,
        margin: 5,
    },

});
