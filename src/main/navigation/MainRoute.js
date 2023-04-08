import { createStackNavigator } from '@react-navigation/stack';
import App from '../../screens/App';
import Menu from '../../screens/Menu'


const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator
        initialRouteName='App'
        headerMode= 'screen'
        headerTintColor= 'white'
        headerStyle= { backgroundColor= 'tomato' }
    >
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default MainRoute