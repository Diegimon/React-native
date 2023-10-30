import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Texto from '../Components/Texto.js'
export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        <Image style={estilos.imagemFazenda} source={logoFazenda}></Image>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Text style={estilos.preco}>{preco}</Text>
      <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  )
}
const estilos = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: '26px',
    lineHeight: 42,
    fontWeight: 'bold'
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: '12px'
  },
  imagemFazenda: {
    width: '32px',
    height: '32px'
  },
  nomeFazenda: {
    fontSize: '16px',
    lineHeight: '26px',
    marginLeft: '12px'
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: '16px',
    lineHeight: '26px'
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '42px',
    marginTop: '8px'
  },
  botao: {
    backgroundColor: '#2A9F85',
    width: '50%',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingVertical: 10,
    borderRadius: 15
  },
  textoBotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  }
})
