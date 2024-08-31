import Styles from "@/app/Styles/Default";
import { Text, View, StyleSheet, Image } from "react-native";
import Produto from "@/app/Models/Produto";
import React from "react";

interface PropProd {
    produto: Produto
}

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s'


const ItemProduto: React.FC<PropProd> = ({ produto }) => {

    //Melhor Maneira
    const imageSource = produto.foto ? { uri: produto.foto } : { uri: defaultImage };

    return (
        <View style={Styles.card}>
            <Text style={Styles.cardTitle}>{produto.nome}</Text>
            <Text style={Styles.cardContent}>R$ {produto.preco.toFixed(2)}</Text>
            <Text style={Styles.cardContent}>{produto.categoria}</Text>
            <Image source={imageSource} style={Styles.image} resizeMode="cover"/>
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

