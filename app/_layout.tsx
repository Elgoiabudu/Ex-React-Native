import { Stack } from "expo-router";
import Styles from "@/app/Styles/Default";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Só nos Produtos!" }} />
    </Stack>
  );
}