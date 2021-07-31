import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, placeholder, TouchableOpacity, Alert} from 'react-native';

export default function App() {

const [peso, mudaPeso] = useState("0")
const [litros, mudalitros] = useState(0)

function submit() {
  console.log(peso)
  var resultado = parseFloat(peso) * 35;
  console.log(resultado)
  mudalitros(resultado);
}
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri:"https://lh3.googleusercontent.com/EXG88O7cdHt-UqS5Da4yH5Q20qco8wXg3SSQTGvcLM0-XLv-MPtRbdTxWXqQ6FILdg"}}
     
      />
    <View>
      <Text style={styles.textosimples}>Você tem que beber </Text>
      <Text style={styles.textogrande}>{litros} ml </Text>
      <Text style={styles.textosimples}>de água por dia. </Text>  
    </View>  
      <TextInput
      style={styles.input}
        placeholder="Digite seu peso aqui"
        keyboardType="numbers-and-punctuation"
        onChangeText={(texto) => mudaPeso(texto)}
        />   
        <TouchableOpacity style={styles.botao} onPress={submit}>
        <Text>Descobrir</Text>
        </TouchableOpacity>
           
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 48
  
  },
  title: {
    color: '#000000',
  
  },
  logo: {
    width: 65,
    height: 65,
  },
  textosimples: {
    fontSize: 24,
  },
  textogrande: {
    fontSize: 40,
  },
  input: {
    fontSize: 24,
    height: 48,
    backgroundColor: "#FDE49C",
    paddingTop: -5,
    width: '80%',
    textAlign: 'center',
    marginTop: 10
    
  },
  botao: {
    height: 48,
    backgroundColor: "#F3BDA1",
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  
  }
});
