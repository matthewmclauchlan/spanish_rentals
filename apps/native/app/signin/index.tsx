// apps/native/app/signin/index.tsx
import React from 'react';
import SignInForm from 'packages/ui/SignInForm';

export default function SignInPage() {
  const handleSignIn = (email: string, password: string) => {
    // Call your shared authentication logic from packages/ui/useAuth.ts
    console.log('Sign in with:', email, password);
    // TODO: Implement actual sign in flow
  };

  return <SignInForm onSubmit={handleSignIn} />;
}
