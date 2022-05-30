import { Text, View, StyleSheet, Button, Image, ScrollView, TextInput } from 'react-native';
import Logo from './Logo';

const Contact = () => {
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='small' direction='center' />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH1}>NOS SERVICES</Text>
                    <Text style={styles.txtH2}>
                        &middot; Voyages à la carte{'\n'}
                        &middot; Groupes{'\n'}
                        &middot; Voyages d'affaires{'\n'} 
                        &middot; Meetings &amp; Events{'\n'} 
                    </Text>
                    <Text style={styles.txtH1}>Voyages à la carte</Text>
                </View>
                
                <Image source={require('../assets/service-alacarte.jpg')} style={styles.imgHomeBackground} />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH3}>Passionnés. Ce sont plus de 400 spécialistes à votre service, répartis sur plus de 80 destinations partout dans le monde. Votre prochaine destination n’aura aucun secret pour eux.</Text>
                    <Text style={styles.txtH3Bold}>Je contacte un spécialiste</Text>
                    <View style={styles.form}>
                        <TextInput placeholder="Quelle est votre destination ?" style={styles.input} />
                        <Button title='Rechercher' color='#02ADE5'></Button>
                    </View>
                </View>



                <View style={styles.textMargin}>
                    <Text style={styles.txtH1}>Groupes</Text>
                </View>
                
                <Image source={require('../assets/services-groupe.jpg')} style={styles.imgHomeBackground} />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH3}>
                        Partout en France, notre réseau et nos spécialistes « groupes » sont à vos côtés.{'\n'}
                        {'\n'}
                        Notre équipe regroupe les meilleurs spécialistes de tous les métiers : production, transport, chef de projet …
                    </Text>
                    <Text style={styles.txtH3Bold}>Je contacte un spécialiste</Text>
                    <View style={styles.form}>
                        <TextInput placeholder="Quelle est votre région ?" style={styles.input} />
                        <Button title='Rechercher' color='#02ADE5'></Button>
                    </View>
                </View>



                <View style={styles.textMargin}>
                    <Text style={styles.txtH1}>Voyages d’affaires</Text>
                </View>
                
                <Image source={require('../assets/services-voyagesaffaires.jpg')} style={styles.imgHomeBackground} />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH3}>Travel Solutions, c’est l’ultime alliance entre les meilleurs outils de réservation “on line” au monde et l’assistance, partout, tout le temps, des meilleurs conseillers de voyages.{'\n'}</Text>
                    <Text style={styles.txtH3Bold}>Testez notre outil de modélisation rapide d’adoption de “Travel Solution”. Estimez immédiatement les bénéfices pour votre entreprise. C’est édifiant !</Text>
                    <Button title='Estimez immédiatement' color='#02ADE5'></Button>
                </View>



                <View style={styles.textMargin}>
                    <Text style={styles.txtH1}>Meetings & Events</Text>
                </View>
                
                <Image source={require('../assets/services-meetingsevents.jpg')} style={styles.imgHomeBackground} />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH3}>
                        Notre équipe regroupe des « artisans » de tous les métiers de l’évènementiel et de l’incentive : meeting planner, graphic designer, production, transport …{'\n'}
                        {'\n'}
                        Nous approchons chaque évènement en équipe. Pendant toute la gestion du projet, et jusqu’à sa réalisation, notre équipe sera le prolongement de la vôtre !
                    </Text>
                    <Text style={styles.txtH3Bold}>Je contacte un spécialiste</Text>
                    <View style={styles.form}>
                        <TextInput placeholder="Quelle est votre projet ?" style={styles.input} />
                        <Button title='Rechercher' color='#02ADE5'></Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    imgHomeBackground: {
        width: '100%',
        height: 600,
        resizeMode: 'cover',
    },
    containerView: {
      marginTop: 40,
      width: '100%',
      backgroundColor: '#ffffff',
    },
    circuitTxtAbsoluteView: {
      height: 20,
      backgroundColor: 'white',
      opacity: 0.7,
      paddingLeft: 5,
      fontSize: 10,
    },
    textMargin: {
      marginHorizontal: 20,
      marginVertical: 10,
    },
    txtH1: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtH2: {
        marginVertical: 10,
        fontSize: 18,
        color: '#02ADE5',
    },
    txtH3: {
        fontSize: 14,
        marginBottom: 10,
        color: '#4B4B4B',
    },
    txtH3Bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4B4B4B',
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#4B4B4B',
        fontSize: 12,
    }
});
