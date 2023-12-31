import logo from '../assets/logo.png'
import tomate from '../assets/frutas/Tomate.png'
import brocolis from '../assets/frutas/Brócolis.png'
import batata from '../assets/frutas/Batata.png'
import pepino from '../assets/frutas/Pepino.png'
import abobora from '../assets/frutas/Abóbora.png'

const cesta = {
  topo: {
    titulo: 'Detalhes da cesta'
  },
  detalhes: {
    nome: 'Cesta de verduras',
    logoFazenda: logo,
    nomeFazenda: 'Jenny jack farm',
    descricao:
      'Uma Cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    preco: 'R$ 40,00',
    botao: 'Comprar'
  },
  itens: {
    titulo: 'Itens das cestas',
    lista: [
      { nome: 'tomate', imagem: tomate },
      { nome: 'Brocolis', imagem: brocolis },
      { nome: 'Batata', imagem: batata },
      { nome: 'Pepino', imagem: pepino },
      { nome: 'Abobora', imagem: abobora }
    ]
  }
}

export default cesta
