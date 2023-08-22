import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from "react-native";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { useRouter, useSearchParams, Stack } from "expo-router";
import { useState } from "react";
import Tabs from "../../components/jobdetails/tabs/Tabs";

const tabs = ["About", "Qualifications", "Responsibilities"];
const JobDetails = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          ></Specifics>
        );
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          ></Specifics>
        );
      default:
        break;
    }
  };
  const { data, isLoading, error, refetch } = useFetch({
    endpoint: "job-details",
    query: {
      job_id: Number(params.id),
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            ></ScreenHeaderBtn>
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            ></ScreenHeaderBtn>
          ),
        }}
      ></Stack.Screen>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          ></RefreshControl>
        }
      >
        {isLoading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View
            style={{ paddingTop: 0, padding: SIZES.small, paddingBottom: 100 }}
          >
            <Company
              companyName={data[0].employer_name}
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              location={data[0].job_country}
            />
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            ></Tabs>

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <JobFooter url={data[0]?.job_google_link} />
    </SafeAreaView>
  );
};

export default JobDetails;
