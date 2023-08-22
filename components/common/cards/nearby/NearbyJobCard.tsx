import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { icons } from "../../../../constants";
import { JobPosting } from "../../../../interfaces/Jobs";

interface Props {
  job: JobPosting;
  handleNavigate: () => void;
}
const PopularJobCard = ({ job, handleNavigate }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={[styles.logoContainer]}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: job.employer_logo,
            }}
            resizeMode="contain"
            style={styles.logoImage}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.job_title}</Text>
        <View>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
