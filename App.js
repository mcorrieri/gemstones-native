import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Characters from "./components/Characters";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Characters />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
