'use client';

import React from 'react';

export interface MinimalSignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

export default function MinimalSignInForm({ onSubmit }: MinimalSignInFormProps) {
  return (
    <div>
      <h1>Sign In (Minimal)</h1>
      <button onClick={() => onSubmit("test@example.com", "password")}>
        Sign In
      </button>
    </div>
  );
}
