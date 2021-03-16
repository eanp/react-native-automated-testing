import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

export default class App extends Component {
  state = { counter: 0 };
  render() {
    const { counter } = this.state;
    return (
      <View
        style={LOCAL_STYLES.wrapper}
        testID="app-root"
        accessibilityLabel="app-root">
        <Button
          title={"Clicked " + counter + " times"}
          testID="increase-count"
          accessibilityLabel="increase-count"
          onPress={() => {
            this.setState({ counter: counter + 1 });
          }}
        />
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});