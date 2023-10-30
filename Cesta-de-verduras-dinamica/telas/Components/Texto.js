import React from 'react'
import { Text, StyleSheet } from 'react-native'

import Montserrat from '../../fontes/Montserrat/Montserrat-VariableFont_wght.ttf'
import MontserratBold from '../../fontes/Montserrat/static/Montserrat-Bold.ttf'

export default function Texto({ children, style }) {
  let estilo = estilos.texto
  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito
  }
  return <Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: Montserrat
  },
  textoNegrito: {
    fontFamily: MontserratBold,
    fontWeight: 'normal'
  }
})
