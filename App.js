import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import MainScreen from './src/screens/MainScreen';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>App intialisation</Text>
    //   <Image
    //     source={{
    //       uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

    //     }}
    //     style={{ width: 200, height: 200 }}
    //   />
    //   <TextInput placeholder='Input text here'/>
    // </View>
    <>
      <MainScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});