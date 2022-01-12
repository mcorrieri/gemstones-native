import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function Header() {
  function directHome() {
    console.log("hi");
  }

  return (
    <View style={styles.container}>
      <Text>Praise Be To He!</Text>
      <Image
        source={{
          uri: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/walton-goggins-the-righteous-gemstones-season-2-social.jpg",
        }}
        style={{ width: 300, height: 300 }}
      ></Image>
      <Button title="Welcome!" onPress={directHome}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
