import { SIZES, FONT, COLORS } from "../../../constants";
import { StyleSheet } from "react-native";

FONT;
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
