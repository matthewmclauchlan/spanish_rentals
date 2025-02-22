import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Sign In
      </Text>
      <View>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 8 }}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 8 }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#007AFF',
            padding: 12,
            alignItems: 'center',
            borderRadius: 4,
          }}
          onPress={() => onSubmit(email, password)}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
