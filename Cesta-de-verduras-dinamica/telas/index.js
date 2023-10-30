import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Topo from './Components/Topo.js'
import Detalhes from './Components/Detalhes.js'
import Item from './Components/Item.js'
import Texto from './Components/Texto.js'

export default function Cesta({ topo, detalhes, itens }) {
  const renderItem = ({ item }) => {
    return <Item item={item} />
  }

  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={renderItem}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          )
        }}
      />
    </>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  }
})
