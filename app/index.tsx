import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";

import axios from "axios";
import { useEffect } from "react";
import { useFocusEffect, useRouter } from "expo-router";


export default function Index() {

  let [produtos, setProdutos] = useState([]);

  const router = useRouter()
  useFocusEffect(() => {
    carregarProdutos();
  })

  useEffect(() => {
    carregarProdutos()
  }, [])

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
      <ListaProdutos produtos={produtos} aoAtualizar={carregarProdutos}></ListaProdutos>
      <Button title={"Cadastrar"} onPress={() => { telaCadastro() }}></Button>
    </View>

  )

  function telaCadastro() {
    router.push('/Componentes/Telas/cadastro');
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
