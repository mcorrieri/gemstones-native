import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";

export default function Header() {
  function handlePress() {
    alert("Praise be to he!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/walton-goggins-the-righteous-gemstones-season-2-social.jpg",
        }}
        style={{
          width: 300,
          height: 300,
          padding: 200,
          marginBottom: 0,
          marginTop: 150,
        }}
      ></Image>
      <Button title="Welcome!" onPress={handlePress}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
