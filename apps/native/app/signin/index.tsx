import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SignInForm from 'packages/ui/SignInForm';
import { loginWithEmail, login as googleLogin } from 'packages/ui/appwrite';

// Define your navigation routes and their parameters.
type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  // ... add additional routes as needed
};

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignInScreen() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [error, setError] = useState<string>('');

  const handleEmailSignIn = async (email: string, password: string) => {
    try {
      const user = await loginWithEmail(email, password);
      if (user) {
        navigation.navigate('Home');
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
        navigation.navigate('Home');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error signing in with Google.';
      setError(errorMessage);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SignInForm onSubmit={handleEmailSignIn} />
      {error ? <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text> : null}
      <TouchableOpacity
        onPress={handleGoogleSignIn}
        style={{
          marginTop: 16,
          backgroundColor: '#DB4437',
          padding: 12,
          borderRadius: 4,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
