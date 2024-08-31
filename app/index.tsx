import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";

import axios from "axios";
import { useEffect } from "react";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";

const produtoss = [
  { id: 1, nome: "Coca-Cola", preco: 5.5 },
  { id: 2, nome: "Pepsi", preco: 6 },
  { id: 3, nome: "Fanta", preco: 7.5 },
  { id: 4, nome: "Guaraná Antártica", preco: 8.5 },
  { id: 5, nome: "Sprite", preco: 5.75 },
  { id: 6, nome: "Schweppes", preco: 6.25 },
  { id: 7, nome: "7 Up", preco: 5.9 },
  { id: 8, nome: "Red Bull", preco: 11.5 },
  { id: 9, nome: "Monster", preco: 12 },
  { id: 10, nome: "H2OH!", preco: 4.5 },
  { id: 11, nome: "Antarctica Original", preco: 8 },
  { id: 12, nome: "Pepsi Twist", preco: 6.5 },
  { id: 13, nome: "Guaraná Jesus", preco: 7.8 },
  { id: 14, nome: "Coca-Cola Zero", preco: 6.2 },
  { id: 15, nome: "Coca-Cola Diet", preco: 6.2 },
  { id: 16, nome: "Fanta Laranja", preco: 7.5 },
  { id: 17, nome: "Fanta Uva", preco: 7.5 },
  { id: 18, nome: "Coca-Cola Cherry", preco: 7.0 },
  { id: 19, nome: "Pepsi Black", preco: 6.8 },
  { id: 20, nome: "Schweppes Citrus", preco: 6.3 },
  { id: 21, nome: "Schweppes Ginger Ale", preco: 6.7 },
  { id: 22, nome: "Guaraná Antarctica Citrus", preco: 8.0 },
  { id: 23, nome: "Red Bull Sugarfree", preco: 11.5 },
  { id: 24, nome: "Monster Ultra", preco: 12.5 },
  { id: 25, nome: "H2OH! Limão", preco: 4.75 },
  { id: 26, nome: "Coca-Cola Vanilla", preco: 7.0 },
  { id: 27, nome: "Pepsi Mango", preco: 6.5 },
  { id: 28, nome: "Fanta Melancia", preco: 7.7 },
  { id: 29, nome: "Guaraná Antarctica Black", preco: 8.2 },
  { id: 30, nome: "Coca-Cola Energy", preco: 9.0 },
];

export default function Index() {

  let [count, setCount] = useState(0);
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos()
  }, [ListaProdutos])

  function carregarProdutos() {
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp) => {
        setProdutos(resp.data);
      })
  }

  return (
    <View
      style={estilo.container}
    >

      <ListaProdutos produtos={produtos} ></ListaProdutos>

      <Button title={`Clicado ${count} vezes`} onPress={contador}></Button>
      <Button title={`Resetar`} onPress={() => setCount(0)}></Button>

      <CadastroProduto/>

    </View>

  )

  function contador() {
    setCount(count + 1)
  }
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "green",
    padding: 20,
    borderRadius: 50
  },
  text: {
    color: "brown",
    fontSize: 25,
    fontFamily: "sanserifa",
    //textAlign: "center",
    padding: 10,
  },
  clovis: {
    backgroundColor: "pink",
    borderRadius: 10,
    borderWidth: 20,
    borderColor: "yellow",
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
})
