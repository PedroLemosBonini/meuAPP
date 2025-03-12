import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
import api from "../axios/axios";

export default function CadastroOrganizador() {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleCadastroOrganizador() {
    await api.postCadastroOrganizador(organizador).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert(response.data.message);
      },
      (error) => {
        Alert.alert(error.response.data.error);
        console.log(error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o Cadastro do Organizador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, email: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, telefone: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, senha: value });
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastroOrganizador}>
        <Text>Cadastrar organizador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizon: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
});
