// apps/native/app/_layout.tsx
import { Slot } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
