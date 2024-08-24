import Styles from "@/app/Styles/Default";
import { Text, View, StyleSheet } from "react-native";


function ItemProduto({ produto }: { produto: { nome: string, preco: number } }) {
    return (
        <View style={Styles.card}>
            <Text style={Styles.cardTitle}>{produto.nome}</Text>
            <Text style={Styles.cardContent}>R$ {produto.preco.toFixed(2)}</Text>
        </View>
    )

}

export default ItemProduto;

