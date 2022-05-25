import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../components/Home';
import CircuitItem from '../components/CircuitItem';

const HomeRoute = () => <Home />;
const HistoryRoute = () => <CircuitItem />;
const AddRoute = () => <Text>Ajouter</Text>;
const SettingsRoute = () => <Text>Recents</Text>;

const Nav = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#dddddd' },
        { key: 'history', title: 'History', icon: 'history' },
        { key: 'add', title: 'Ajouter', icon: 'plus' },
        { key: 'settings', title: 'settings', icon: 'cog-outline' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      home: HomeRoute,
      history: HistoryRoute,
      add: AddRoute,
      settings: SettingsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}>
        </BottomNavigation>
    );
}

export default Nav;


const styles = StyleSheet.create({
    scrollview: {
      padding: 10,
    },
    titleH1: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    textDate: {
      color: '#999',
      fontSize: 16,
    },
    textBlockTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    text13: {
      fontSize: 13,
    },
    text11: {
      fontSize: 11,
    },
    surface: {
      padding: 6,
      height: 60,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
      backgroundColor: '#ccc'
    },
  });
  