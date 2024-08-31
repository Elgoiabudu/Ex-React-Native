import Styles from "@/app/Styles/Default"
import { useState } from "react"
import { Text, TextInput, View } from "react-native"


const CadastroProduto = () => {

    let [nome, setNome] = useState('')
    let [descricao, setDescricao] = useState('')

    return (
        <View>
            <Text>Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} style={Styles.input}/>

            <Text>Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao} style={Styles.input}/>
        </View>
    )
}


export default CadastroProduto