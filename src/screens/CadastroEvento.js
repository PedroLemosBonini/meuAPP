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
import DateTimePicker from "../components/DateTimePicker";

export default function CadastroEvento() {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function handleCadastroEvento() {
    await api.postCadastroEvento(evento).then(
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
      <Text style={styles.title}>Faça o Cadastro do Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do evento"
        value={evento.nome}
        onChangeText={(value) => {
          setEvento({ ...evento, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => {
          setEvento({ ...evento, descricao: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={evento.data_hora}
        onChangeText={(value) => {
          setEvento({ ...evento, data_hora: value });
        }}
      />
      <DateTimePicker
      type={"datetime"}
      buttonTitle={
        evento.data_hora === "" ? "Selecione a data do evento" : evento.data_hora.toLocaleString()
      }
      setValue={setEvento}
      dateKey={"data_hora"}
      >
        
      </DateTimePicker>
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => {
          setEvento({ ...evento, local: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Id do organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setEvento({ ...evento, fk_id_organizador: value });
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastroEvento}>
        <Text>Cadastrar Evento</Text>
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
