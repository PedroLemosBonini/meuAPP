import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const api = axios.create({
    baseURL:"http://10.89.240.87:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
})

api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync("token");
        if(token){
            config.headers.Authorization = `${token}`
        }
        return config
    },(error) => Promise.reject(error)
)

const sheets = {
    postLogin:(user)=>api.post("login/", user),
    postCadastro:(user)=>api.post("user/", user),
    postCadastroEvento:(evento)=>api.post("evento/", evento),
    postCadastroIngresso:(ingresso)=>api.post("ingresso/", ingresso),
    postCadastroOrganizador:(organizador)=>api.post("organizador/", organizador),
    getEventos:() => api.get("evento"),
    getIngressosPorEvento:(idEvento)=> api.get(`ingresso/evento/${idEvento}`)
}

export default sheets