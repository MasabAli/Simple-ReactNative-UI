import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
/* import Swiper from 'react-native-swiper';
  Next I am going to add swiper and header
*/
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: "100%",
            height: 220,
            marginBottom: 10,
            borderRadius: 200,
          }}
          source={require("./assets/download.png")}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Hello!</Text>

        <Text
          style={{
            fontSize: 16,
            color: "gray",
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          Welcome to Masab's UI
        </Text>

        <View style={{ flexDirection: "row", margin: 1, paddingVertical: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0d47a1",
              padding: 10,
              borderRadius: 30,
              width: 120,
              marginHorizontal: 2,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              LogIn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0d47a1",
              padding: 10,
              borderRadius: 30,
              width: 120,
              marginHorizontal: 2,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 18,
                marginHorizontal: 2,
                borderWidth: 1,
                borderColor: "#0d47a1",
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20, marginHorizontal: 10 }}>
          Or join me on
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#1565c0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
              f
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#ef5350",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
              G
            </Text>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "#1565c0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
              in
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
