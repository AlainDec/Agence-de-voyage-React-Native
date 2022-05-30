import { Text, View, StyleSheet, Button, Image, ScrollView, TextInput } from 'react-native';
import Logo from '../components/Logo';
import colors from '../themes/colors';

const Contact = () => {
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='small' direction='center' />

                <View style={styles.textMargin}>
                    <Text style={styles.txtH1}>Le spécialiste de votre projet de voyage vous contactera rapidement</Text>
                </View>

                <View style={{backgroundColor: '#F0F0F0'}}>
                    <View style={styles.textMargin}>
                        <View style={styles.form}>
                            <TextInput placeholder="Votre nom*" style={[styles.input, styles.inputMarginRight]} />
                            <TextInput placeholder="Votre prénom*" style={styles.input} />
                        </View>
                        <View style={styles.form}>
                            <TextInput placeholder="Votre email*" style={[styles.input, styles.inputMarginRight]} />
                            <TextInput placeholder="Votre téléphone*" style={styles.input} />
                        </View>
                        <View style={styles.form}>
                            <TextInput placeholder="Votre demande*" style={[styles.input, styles.textArea]} />
                        </View>
                        <View style={styles.form}>
                            <Text>* : Saisie obligatoire</Text>
                            <Button title='Envoyer' color={colors.primary}></Button>
                        </View>
                        <Text style={styles.mentions}>Les informations recueillies sur ce document sont enregistrées dans un fichier informatisé par le responsable de traitement Havas Voyages pour votre projet, le respect des obligations réglementaires, légales, comptables et fiscales ainsi que la prospection commerciale. Tous les champs marqués d’un astérisque (*) sont obligatoires. Conformément à la loi informatique, fichiers et libertés n°78-17 du 6 janvier 1978 modifiée vous disposez notamment d’un droit d’accès, d’opposition, de rectification, de limitation et de suppression sur les données nominatives vous concernant.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    containerView: {
      /* marginTop: 40, */
      width: '100%',
      backgroundColor: '#ffffff',
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
    mentions: {
        marginTop: 30,
        fontSize: 12,
        color: colors.titleInput,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.input,
        backgroundColor: 'white',
        fontSize: 12,
    },
    inputMarginRight: {
        marginRight: 20,
    },
    textArea: {
        flex: 1,
        height: 100,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.input,
        fontSize: 12,
    }
});
