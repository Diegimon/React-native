import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import Cesta from './telas'
import mock from './mocks/Cesta.js'
import cesta from './mocks/Cesta.js'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  )
}
