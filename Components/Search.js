import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.Container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
});

export default MyComponent;
