import React, { useState } from "react";
import { StyleSheets, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const changeSearch = () => {
    setSearchText({ searchText });
  };

  return (
    <View style={styles.searchBox}>
      <Searchbar
        placeholder="Search"
        onChangeText={changeSearch}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheets.create({
  searchBox: {
    backgroundColor: "green",
    alignItems: "center",
    padding: 16,
  },
});
