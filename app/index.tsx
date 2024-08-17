import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";


const produtos = [
  { id: 1, nome: "Coca-Cola", preco: 5.5 },
  { id: 2, nome: "Pepsi", preco: 6 },
  { id: 3, nome: "Fanta", preco: 7.5 },
  { id: 4, nome: "Guaraná Antártica", preco: 8.5 },
];

const [count, setCount] = useState(0);

export default function Index() {  

  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p) => (
        <View style={estilo.clovis}>
          <Text style={estilo.text}>{p.nome}</Text>
          <Text style={estilo.text}>R$ {p.preco.toFixed(2)}</Text>
        </View>
      ))}

      <Button title={ count > 0 ? `Clicado ${count} vezes` : "CU"} onPress={() => contador}></Button>
      <Button title={`Resetar`} onPress={() => setCount(0)}></Button>

    </View>

  )
};

function contador(){
  setCount(count + 1)  
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
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
