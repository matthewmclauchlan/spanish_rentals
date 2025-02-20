// apps/native/app/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/signin");
    }, 0);
    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
