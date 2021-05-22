import React from 'react';
import AppLoading from 'expo-app-loading'

import { Confirmation } from './src/pages/Confirmation';
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_600SemiBold_Italic
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_600SemiBold_Italic
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (

    <Confirmation />
  )
}
