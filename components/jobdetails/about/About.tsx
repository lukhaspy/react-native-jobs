import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

interface Props {
  info: string;
}
const About = ({ info }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About:</Text>

      <View style={styles.contentBox}>
        <Text>{info}</Text>
      </View>
    </View>
  );
};

export default About;
