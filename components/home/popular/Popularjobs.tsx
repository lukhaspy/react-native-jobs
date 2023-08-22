import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";
import { JobPosting } from "../../../interfaces/Jobs";

const Popularjobs = () => {
  const router = useRouter();

  const { isLoading, data } = useFetch({
    endpoint: "search",
    query: {
      query: "React developer",
      num_pages: 1,
      page: 1,
    },
  });

  const [selectJob, setSelectedJob] = useState<string>();
  const handleCardPress = (item: JobPosting) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  const error = "";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Added Recently</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            renderItem={({ item }) => (
              <PopularJobCard
                selectedJob={item.job_id}
                handleCardPress={handleCardPress}
                item={item}
              ></PopularJobCard>
            )}
          ></FlatList>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
