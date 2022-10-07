import Nav from './components/Nav';
import Header from './components/Header';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CircuitItem from './screens/CircuitItem';
import CircuitItemZoomPhoto from './screens/CircuitItemZoomPhoto';
import Services from './screens/Services';
import Contact from './screens/Contact';
import { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        >
        {/* <Header /> -*/}
        <Stack.Screen name="Home" options={{
          headerShown: false
        }} component={Home} />
        <Stack.Screen name="CircuitItem" component={CircuitItem} />
        <Stack.Screen name="CircuitItemZoomPhoto" component={CircuitItemZoomPhoto} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
