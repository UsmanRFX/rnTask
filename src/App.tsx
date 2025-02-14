import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Config from 'react-native-config';

export default function App() {
  return (
    <SafeAreaView>
  <Text>API URL: {Config.API_BASE_URL}</Text>
    </SafeAreaView>
  )
}