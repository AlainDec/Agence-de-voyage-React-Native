import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';
import CircuitItem from '../screens/CircuitItem';

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

  