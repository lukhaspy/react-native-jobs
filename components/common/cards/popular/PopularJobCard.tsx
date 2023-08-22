import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { icons } from "../../../../constants";
import { JobPosting } from "../../../../interfaces/Jobs";

interface Props {
  item: JobPosting;
  selectedJob: string;
  handleCardPress: (item: JobPosting) => void;
}
const PopularJobCard = ({ item, selectedJob, handleCardPress }: Props) => {
  return (
    <View style={styles.container(selectedJob, item)}>
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <View style={[styles.infoWrapper]}>
          <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
            <Image
              source={{
                uri: item.employer_logo,
              }}
              resizeMode="contain"
              style={styles.logoImage}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.companyName} numberOfLines={1}>
            {item.employer_name}
          </Text>
        </View>

        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
      </TouchableOpacity>
      <View style={styles.footerCard}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image source={icons.location} style={styles.locationIcon}></Image>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Image source={icons.salary} style={styles.locationIcon}></Image>
          <Text style={styles.location}>{item.job_max_salary}</Text>
        </View>
      </View>
    </View>
  );
};

export default PopularJobCard;
