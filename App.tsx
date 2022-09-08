import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { SignIn } from '@screens/SignIn';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='light'
        translucent
        backgroundColor='transparent'
      />

        {!fontsLoaded ? <Loading /> : <SignIn />}
    </ThemeProvider>
  );
}
