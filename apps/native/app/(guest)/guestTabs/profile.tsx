import React from "react";
import { SafeAreaView, Text, Button, View } from "react-native";
import { useRouter, Redirect } from "expo-router";
import { logout } from "packages/ui/appwrite";
import { useGlobalContext } from "packages/ui/global-provider";

const Profile = () => {
  const { user } = useGlobalContext();
  const router = useRouter();

  // Redirect to sign-in if there's no user data
  if (!user) {
    return <Redirect href="/signin" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Profile
      </Text>

      {/* Display user information */}
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>

      <View style={{ marginVertical: 20 }}>
        <Button
          title="Logout"
          color="red"
          onPress={async () => {
            const result = await logout();
            if (result) {
              router.push("/signin");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
