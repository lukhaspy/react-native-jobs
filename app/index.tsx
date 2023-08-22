import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
              ></ScreenHeaderBtn>
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.gptw}
                dimension="100%"
              ></ScreenHeaderBtn>
            ),
            headerTitle: "AssureSoft",
          }}
        ></Stack.Screen>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.small }}>
            <Welcome
              search={search}
              setSearch={setSearch}
              handleClick={() => {
                if (search) router.push(`/search/${search}`);
              }}
            ></Welcome>
            <Popularjobs></Popularjobs>
            <Nearbyjobs></Nearbyjobs>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
