import React from 'react'
import Texto from './Texto.js'
import { Image, View, StyleSheet, FlatList } from 'react-native-web'

export default function Itens({ item: { nome, imagem } }) {
  return (
    <View style={estilos.item} key={nome}>
      <Image style={estilos.imagens} source={imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  )
}

const estilos = StyleSheet.create({
  imagens: {
    width: 80,
    height: 80
  },

  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})
