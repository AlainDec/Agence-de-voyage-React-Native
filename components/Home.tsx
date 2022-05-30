import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles';
import Logo from './Logo';
import CircuitsScrolling from './CircuitsScrolling';
import { CircuitScrollingProps } from '../types/types';

const Home: React.FC<CircuitScrollingProps> = ({ route, navigation }: CircuitScrollingProps):JSX.Element => {
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='tall' />
                <Image source={require('../assets/video-accueil.png')} style={styles.imgHomeBackground} />
                <CircuitsScrolling route={route} navigation={navigation} />
            </ScrollView>
            
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;
