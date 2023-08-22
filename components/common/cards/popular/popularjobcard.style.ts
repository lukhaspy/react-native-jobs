import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";
import { JobPosting } from "../../../../interfaces/Jobs";

interface Styles {
  container: ViewStyle;
  logoContainer: ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  jobName: TextStyle;
  infoWrapper: ViewStyle;
  publisher: TextStyle;
  location: TextStyle;
  locationIcon: ImageStyle;
}

const styles = StyleSheet.create<Styles | any>({
  container: (selectedJob: string, item: JobPosting) => ({
    width: 250,
    height: 230,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, item: JobPosting) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    paddingLeft: 10,
    fontSize: SIZES.medium,
    color: "#fff",
  },
  jobName: (selectedJob: string, item: JobPosting) => ({
    fontSize: SIZES.large,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  publisher: (selectedJob: string, item: JobPosting) => ({
    fontSize: SIZES.medium - 2,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  locationIcon: {
    width: "20%",
    height: "20%",
    padding: "10%",
    tintColor: COLORS.primary,
  },
  footerCard: {
    backgroundColor: "#fff",
    padding: "5%",
    color: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: "10",
    borderBottomRightRadius: "10",
  },
});

export default styles;
