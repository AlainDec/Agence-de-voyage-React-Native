import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { ServicesProps, ContactProps } from '../types/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../themes/colors';

type ContactRoute = ContactProps['route']
type ContactNavigation = ContactProps['navigation']

const HomeSubFooter: React.FC<ServicesProps> = ({ navigation }):JSX.Element => {
    const nav = useNavigation<ContactNavigation>()
    const rte = useRoute<ContactRoute>()
    return (
        <View style={styles.containerSubFooter}>
            <View style={styles.containerSubFooterLeft}>
                <Text style={styles.TxtQuestion}>Une question ?</Text>
                <Button 
                    onPress={() => navigation.navigate('Contact')}
                    title='Contactez-nous' 
                    color='#02ADE5' />
                <Text style={styles.TxtExpert}>Nos experts voyage</Text>
                <Text style={styles.TxtHoraires}>Du lundi au dimanche de 9h à 20h</Text>
                <View style={styles.containerTelephone}>
                    <Image 
                        source={require('../assets/telephone.png')}
                        style={styles.imgTelephone} />
                    <Text style={styles.TxtQuestion}>0978 979 018</Text>
                </View>
            </View>
            <View style={styles.containerSubFooterRight}>
                <Text style={styles.TxtServices}>
                    Voyages à la carte,{'\n'}
                    Groupes,{'\n'}
                    Voyages d’affaires,{'\n'}
                    Meetings &amp; Events,{'\n'}
                    Sports
                </Text>
                <Button 
                    onPress={() => navigation.navigate('Services')}
                    title='Nos services'
                    color='#02ADE5' />
            </View>
        </View>
    )
}

export default HomeSubFooter;

const styles = StyleSheet.create({
    containerSubFooter: {
        padding: 20,
        flexDirection: 'row',
    },
    containerSubFooterLeft: {
        flex: 3,
        marginRight: 20,
    },
    containerSubFooterRight: {
        flex: 2,
    },
    TxtQuestion: {
        marginBottom: 5,
        fontSize: 16,
        color: colors.titleInput
    },
    TxtServices: {
        marginBottom: 5,
        fontSize: 12,
        color: colors.titleInput
    },
    TxtExpert: {
        marginTop: 20,
        fontSize: 14,
        color: colors.titleInput
    },
    TxtHoraires: {
        fontSize: 10,
        color: colors.titleInput,
    },
    containerTelephone: {
        flexDirection: 'row',
        marginTop: 10,
    },
    imgTelephone: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
});