import { View, StyleSheet, ScrollView } from "react-native";
import ItemProduto from "../ItemProduto"
import Index from "@/app";
import Styles from "@/app/Styles/Default";

function ListaProdutos({ produtos }: { produtos: { id: number, nome: string, preco: number }[] }) {
    return (
        <ScrollView>
            <View >
                {produtos.map((p) =>
                    <ItemProduto produto={p} key={p.id}>

                    </ItemProduto>)}
            </View>
        </ScrollView>

    )
}

export default ListaProdutos