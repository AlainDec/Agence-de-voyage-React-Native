import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles';
import Logo from './Logo';
import CircuitsScrolling from './CircuitsScrolling';


const Home = () => {
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='tall' />
                <Image source={require('../assets/video-accueil.png')} style={styles.imgHomeBackground} />
                <CircuitsScrolling />
                <CircuitsScrolling />
            </ScrollView>
            
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;
