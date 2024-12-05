import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import FormRepository from './src/screens/FormRepository';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FormRepository" component={FormRepository} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>    
  );
}

