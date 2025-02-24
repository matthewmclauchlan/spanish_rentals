import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import icons from "../../../constants/icons";
import { getCurrentUser, getRolesForUser } from "packages/ui/appwrite";

// Define a minimal interface for a role document.
interface RoleDocument {
  $id: string;
  role: string;
  [key: string]: any; // Include any extra fields if needed.
}

// A simple TabIcon component for the guest tabs.
interface TabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, title }) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={icon}
      style={[styles.icon, { tintColor: focused ? "#0061FF" : "#666876" }]}
      resizeMode="contain"
    />
    <Text style={[styles.label, { color: focused ? "#0061FF" : "#666876" }]}>
      {title}
    </Text>
  </View>
);

const GuestTabsLayout = () => {
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const user = await getCurrentUser();
      if (user) {
        const fetchedRoles = await getRolesForUser(user.$id);
        // Cast the fetched roles to RoleDocument[]
        setRoles(((fetchedRoles as unknown) as RoleDocument[]).map((doc) => doc.role));
      }
    };
    fetchRoles();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 60,
          paddingTop: 20,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 28,
    height: 28,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    flexWrap: "wrap",
  },
});

export default GuestTabsLayout;
