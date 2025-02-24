"use client";

import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GlobalProvider } from "packages/ui/global-provider";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
