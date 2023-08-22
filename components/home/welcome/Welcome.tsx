import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useState } from "react";

const jobTypes: string[] = ["On Site", "Remote"];

interface Props {
  search: string;
  setSearch: (item: string) => void;
  handleClick: () => void;
}
const Welcome = ({ search, setSearch, handleClick }: Props) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, Lucas Hoffmann</Text>
        <Text style={styles.welcomeMessage}>
          Find your job at
          <Text style={{ fontWeight: "bold" }}> AssureSoft</Text>
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="What job are you looking for?"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default Welcome;
