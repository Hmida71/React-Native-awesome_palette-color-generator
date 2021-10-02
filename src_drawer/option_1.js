import React from "react";
import { View, StyleSheet, Text } from "react-native";

const option_1 = () => {
  return (
    <View style={styles.center}>
      <Text>This is the option_1 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default option_1;