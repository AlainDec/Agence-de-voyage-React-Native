import Nav from './components/Nav';
import Header from './components/Header';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import CircuitItem from './components/CircuitItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        {/* <Header /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CircuitItem" component={CircuitItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
