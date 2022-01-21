import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App intialisation</Text>
      <Image
        source={{
          uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_Native&tbnid=bs9SxMY2Dnr1RM&vet=12ahUKEwjon6DCx8D1AhUI_jgGHWNSAB0QMygAegUIARDRAQ..i&docid=OtKnbiof2BxuvM&w=1200&h=848&itg=1&q=react%20native&ved=2ahUKEwjon6DCx8D1AhUI_jgGHWNSAB0QMygAegUIARDRAQ",

        }}
        style={{ width: 200, height=200 }}
      />
      <TextInput placeholder='Input text here' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});