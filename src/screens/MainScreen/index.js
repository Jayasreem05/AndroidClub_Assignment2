import React from "react";
import { StyleSheet, Text, Image, View, TextInput } from "react-native";
import Username from "../../components/Username";
import Password from "../../components/Password";
export default function MainScreen() {
    return (<View style={styles.container}>
        <Text style={{ color: 'white' }}>Login</Text>
        <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

            }}
            style={{ width: 200, height: 200 }}
        />
        <>
            <Username />
            <Password />
        </>
    </View>);
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});