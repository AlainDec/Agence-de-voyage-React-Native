import Nav from './components/Nav';
import Header from './components/Header';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import CircuitItem from './components/CircuitItem';
import CircuitItemZoomPhoto from './components/CircuitItemZoomPhoto';
import Services from './components/Services';
import Contact from './components/Contact';
import { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="CircuitItemZoomPhoto" component={CircuitItemZoomPhoto} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
