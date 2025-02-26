import React, {useState} from "react"
import{ View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from "react-native"
import api from '../axios/axios'

export default function Login(){
    const  [user,setUser] = useState({
        email:'',
        password:'',
    })

    async function handleLogin(){
        await api.postLogin(user).then(
            (response)=>{
                console.log(response.data.message)
                Alert.alert(response.data.message)
            },(error)=>{
                Alert.alert(error.response.data.error)
                console.log(error)
            }
        )
    }

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Faça Login</Text>
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email}
                onChangeText={(value)=>{setUser({...user,email: value})}}
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                value={user.password}
                onChangeText={(value)=>{setUser({...user,password: value})}}
                />
                <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
    },
    input:{
        width:'100%',
        height:40,
        borderBottomWidth:1,
        marginBottom:20,
        paddingHorizon:10
    },
    button:{
        backgroundColor:'green',
        padding:10,
        borderRadius:5
    }
    
});
  