import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from './styles';

const WaitSpinner = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
  </View>
);

export default WaitSpinner;