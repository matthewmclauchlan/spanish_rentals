// packages/ui/useAuth.ts
'use client';
import { useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email: string, password: string) => {
    // Call your Appwrite authentication API here
    // e.g., const userData = await appwrite.signIn(email, password);
    // setUser(userData);
    console.log('Authenticating', email, password);
  };

  return { user, signIn };
}
