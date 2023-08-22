import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

interface Props {
  iconUrl: any;
  dimension: string;
  handlePress?: () => void;
}
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(dimension)}
      ></Image>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
