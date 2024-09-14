import Produto from "@/app/Models/Produto";
import axios from "axios";
import { useState } from "react"
import Styles from "@/app/Styles/Default";
import { Button, Text, TextInput, View, Alert } from "react-native"



const CadastroProduto = () => {
    let [nome, setNome] = useState('');
    let [descricao, setDescricao] = useState('');
    let [preco, setPreco] = useState(0);
    let [foto, setFoto] = useState('');


    //Continua Aqui
    return (
        <View>
            <Text style={Styles.label}>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} style={Styles.input} />
            <Text style={Styles.label}>Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao} style={Styles.input} />
            <Text style={Styles.label}>Imagem:</Text>
            <TextInput onChangeText={setFoto} value={foto} style={Styles.input} />
            <Text style={Styles.label}>Preço:</Text>
            <TextInput onChangeText={
                (v) => {
                    setPreco(
                        isNaN(parseFloat(v)) ? 0 : parseFloat(v)
                    );
                }
            }
                inputMode="numeric" value={preco.toString()} style={Styles.input} />
            <Button title="Cadastrar" onPress={Cadastrar}></Button>

        </View>
    );

    function Cadastrar() {
        let produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            foto: foto
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api, produto)
            .then((resp) => {
                alert("teste")
                setNome("")
                setFoto("")
                setDescricao("")
                setPreco(0)
            })

    }
}

export default CadastroProduto