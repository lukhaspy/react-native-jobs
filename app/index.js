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

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
              ></ScreenHeaderBtn>
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
              ></ScreenHeaderBtn>
            ),
            headerTitle: "",
          }}
        ></Stack.Screen>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.small }}>
            <Welcome></Welcome>
            <Popularjobs></Popularjobs>
            <Nearbyjobs></Nearbyjobs>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
