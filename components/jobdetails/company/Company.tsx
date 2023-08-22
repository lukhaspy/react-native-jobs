import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

interface Props {
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  location: string;
}
const Company = ({ companyName, jobTitle, companyLogo, location }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image
            resizeMode="contain"
            source={{ uri: companyLogo }}
            style={styles.logoImage}
          ></Image>
        </View>
        <View>
          <Text>{companyName}</Text>
        </View>

        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>

        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} / </Text>
          <View style={styles.locationBox}>
            <Image source={icons.location} style={styles.locationImage}></Image>
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Company;
