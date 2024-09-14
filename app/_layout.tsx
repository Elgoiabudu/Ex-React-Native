import { Stack } from "expo-router";
import Styles from "@/app/Styles/Default";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Só nos Produtos!" }} />
      <Stack.Screen 
        name="cadastro"
        options={{ title: "Cadastrar Produtos" }}/>
    </Stack>

  );
}