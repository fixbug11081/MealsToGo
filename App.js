import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SearchBar } from "../src/components/SearchBar";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <View style={styles.listBox}>
          <Text>listBox</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  // searchBox: {
  //   backgroundColor: "green",
  //   alignItems: "center",
  //   padding: 16,
  // },
  listBox: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    padding: 16,
  },
});
