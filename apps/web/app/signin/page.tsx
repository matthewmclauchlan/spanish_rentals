'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignInForm from 'packages/ui/SignInForm';
import { loginWithEmail, login as googleLogin } from 'packages/ui/appwrite';

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string>('');

  const handleEmailSignIn = async (email: string, password: string) => {
    try {
      const user = await loginWithEmail(email, password);
      if (user) {
        router.push('/');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error signing in with email.';
      setError(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const success = await googleLogin();
      if (success) {
        router.push('/');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error signing in with Google.';
      setError(errorMessage);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 16 }}>
      <SignInForm onSubmit={handleEmailSignIn} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        onClick={handleGoogleSignIn}
        style={{
          marginTop: 16,
          padding: 12,
          width: '100%',
          backgroundColor: '#DB4437',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          fontSize: 16,
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
