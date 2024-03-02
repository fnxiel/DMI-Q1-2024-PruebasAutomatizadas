import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Sumar } from "../funcionalidades/calcular";

export function Calculadora(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)

    return <TouchableOpacity style={styles.container} onPress={() => console.log(Sumar(numero1, numero2))}>
        <Text>Calcular</Text>
        <Text>Aqui van el resto de controles para poder sumar en la calculadora...</Text>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  