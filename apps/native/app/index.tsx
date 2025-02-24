"use client";

import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useGlobalContext } from "packages/ui/global-provider";

export default function HomePage() {
  const router = useRouter();
  const { isLogged } = useGlobalContext();

  useEffect(() => {
    // Give a slight delay to ensure GlobalProvider has updated its state.
    const timer = setTimeout(() => {
      if (isLogged) {
        console.log("User is logged in, redirecting to guest home");
        router.replace("./(guest)"); // Adjust to your home route
      } else {
        console.log("User is not logged in, redirecting to sign-in");
        router.replace("/signin");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isLogged, router]);

  return null;
}
