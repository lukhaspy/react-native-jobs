import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

interface Props {
  url: string;
}
const Footer = ({ url }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image source={icons.share} style={styles.likeBtnImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for the job</Text>
        <Image
          source={icons.chevronRight}
          style={{ tintColor: "#fff", width: "10%", height: "40%" }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
