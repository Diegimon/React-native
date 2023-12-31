import React from 'react'
import { Image, Text, Dimensions, StyleSheet } from 'react-native'
import topo from '../../assets/topo.png'

const { width } = Dimensions.get('window')

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>{titulo}</Text>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: width,
    height: (578 / 768) * width
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  }
})
