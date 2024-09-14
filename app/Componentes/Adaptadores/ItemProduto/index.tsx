import Styles from "@/app/Styles/Default";
import { Text, View, Image, Button, Alert } from "react-native";
import Produto from "@/app/Models/Produto";
import React from "react";
import axios from "axios";

interface PropProd {
    produto: Produto
    aoExcluir?: Function
}



const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s'


const ItemProduto: React.FC<PropProd> = ({ produto, aoExcluir }) => {

    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`)
            .then((resp) => {
                aoExcluir?.call(null);
                Alert.alert('Produto excluido com sucesso');
                alert('Produto excluido com sucesso');
            })
    }

    //Melhor Maneira
    const imageSource = produto.foto ? { uri: produto.foto } : { uri: defaultImage };

    return (
        <View style={Styles.card}>
            <Text style={Styles.cardTitle}>{produto.nome}</Text>
            <Text style={Styles.cardContent}>R$ {produto.preco.toFixed(2)}</Text>
            <Text style={Styles.cardContent}>{produto.categoria}</Text>
            <Text style={Styles.cardContent}>{produto.descricao}</Text>
            <Image source={imageSource} style={Styles.image} resizeMode="cover" />
            <Button title="Excluir"
                onPress={() => { Excluir(produto.id) }} />
        </View>
    )
}


//Maneira Antiga
function ItemProduto2({ produto }: { produto: Produto }) {
    return (
        <View style={Styles.card}>
            <Text style={Styles.cardTitle}>{produto.nome}</Text>
            <Text style={Styles.cardContent}>R$ {produto.preco.toFixed(2)}</Text>
            <Text style={Styles.cardContent}>{produto.categoria}</Text>
        </View>
    )

}

export default ItemProduto;

