import Login from './screens/Login';
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import CadastroEvento from './screens/CadastroEvento';
import CadastroIngresso from './screens/CadastroIngresso';
import CadastroOrganizador from './screens/CadastroOrganizador'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CadastroEvento' component={CadastroEvento}/>
        <Stack.Screen name='CadastroIngresso' component={CadastroIngresso}/>
        <Stack.Screen name='CadastroOrganizador' component={CadastroOrganizador}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}