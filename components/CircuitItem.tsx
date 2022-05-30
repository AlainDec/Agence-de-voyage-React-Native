import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import Logo from './Logo';
import { IData, IGalery } from '../interfaces/interfaces';
import { CircuitScrollingProps } from '../types/types';

const BigImage = ({ dataItem, navigation }: any) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('CircuitItemZoomPhoto', { CircuitItemZoomPhoto: dataItem.index })}
        style={{ width: '100%', height: 300 }}
    >
        <ImageBackground source={dataItem?.galery[0]?.img} style={styles.imgHomeBackground}>
            <View style={styles.circuitBannerAbsoluteView}>
                <Text style={styles.circuitTxtAbsoluteView}>{dataItem?.galery[0]?.name}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

const SmallImage = ({ dataGalery, navigation }: any) => {
    console.log("-------- SmallImage --------");
    console.log("dataGalery = " + dataGalery);
    console.log("dataGalery.id = " + dataGalery.id);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('CircuitItemZoomPhoto', { itemPhoto: dataGalery })}
            style={{ width: '33.3333%', height: 100 }}
        >
            <ImageBackground source={dataGalery.img} style={styles.imgCircuitBg}>
                <View style={styles.circuitBannerAbsoluteView}>
                    <Text style={styles.circuitTxtAbsoluteView2}>{dataGalery?.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const CircuitItem: React.FC<CircuitScrollingProps> = ({ navigation, route }: CircuitScrollingProps): JSX.Element => {
    const { itemCircuit } = route.params;

    if (itemCircuit == undefined || itemCircuit.galery == undefined) {
        return (<View><Text>Erreur</Text></View>)
    }
    
    let galeryData: IGalery[] = itemCircuit.galery;
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <ImageBackground source={itemCircuit.imgBanner} style={styles.imgHomeTopBannerBackground}>
                    <View style={styles.circuitTopBannerAbsoluteView}>
                        <Logo size='small' direction='left' />
                    </View>
                </ImageBackground>

                <View style={styles.textMargin}>
                    <Text style={styles.txtCircuitLocation}>{itemCircuit.location}</Text>
                    <Text style={styles.txtCircuitName}>{itemCircuit.name}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>

                    <BigImage
                        dataItem={itemCircuit}
                        navigation={navigation}
                    />

                    <View style={styles.imgCircuitBgContainer}>
                        {
                            galeryData.map((value: IGalery, index) => {
                                {/* ne prends pas en compte l'index 0 */ }
                                console.log(value);
                                return index > 0 && (
                                    <SmallImage
                                        dataGalery={value}
                                        navigation={navigation}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </View>

                </View>
                <View style={styles.textMargin}>
                    <Text style={styles.txtH2}>Résumé</Text>
                    <Text>Découvrez l'Andalousie en toute liberté. Entre romance, passion, beauté et histoire, la région du sud de l'Espagne a toutes les qualités pour faire de votre séjour un moment inoubliable. Pour plus de confort, nous vous proposons des hôtels de catégorie standard ou supérieure (au choix).</Text>
                    <Text style={styles.txtH2}>Description détaillée</Text>
                    <Text style={styles.txtH3}>JOUR 1 : ARRIVÉE SEVILLE</Text>
                    <Text>Arrivez à l'aéroport de Séville où vous récupérerez votre voiture de location. Vous prendrez une navette pour vous rendre à l’agence de location.{'\n'}
                        Direction votre hôtel pour l'enregistrement et premier tour dans la capitale andalouse.{'\n'}
                        Dîner libre et nuit à Séville.{'\n'}
                        {'\n'}
                        Note : Vous recevrez l’ensemble des informations pour la location de voiture avant votre départ.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 2 : SEVILLE</Text>
                    <Text>Découvrez Séville après le petit-déjeuner à l'hôtel.{'\n'}
                        {'\n'}
                        Durant cette journée, nous vous suggérons :{'\n'}
                        Découvrez de cette ville avec une promenade matinale et visitez certaines des principales attractions de la capitale andalouse tels que le palais royal de l'Alcazar et la cathédrale, sites classés au patrimoine mondial de l'UNESCO.{'\n'}
                        Continuez par Santa Cruz, le quartier pittoresque de la vieille ville. L'Alcazar Royal prend ses origines au 10ème siècle, date à laquelle il est devenu le palais d'un calife maure. Au fil des siècles, il s’est agrandi avec une série de halls, de pavillons, de patios et de jardins magnifiques dans une variété de styles allant du mauresque et mudéjar, au gothique, à la Renaissance et au baroque. Admirez l'arabesque des sculptures, le carrelage orné et les tapisseries et peintures décorant les murs.{'\n'}
                        Continuez vers la cathédrale, dont le glorieux clocher de la Giralda est le symbole le plus emblématique de Séville. La cathédrale a commencé sa vie comme mosquée au 12ème siècle et a depuis grandi pour devenir la troisième plus grande église du monde.{'\n'}
                        {'\n'}
                        Repas libres et nuit à Séville.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 3 : SEVILLE / CORDOUE / GRENADE (350 km- 3h30)</Text>
                    <Text>Après le petit déjeuner, route vers Cordoue.{'\n'}
                        Cordoue était la capitale du califat maure d’Al-Andalus à l'apogée de ses pouvoirs et de sa gloire et nulle part cette richesse n'est plus évidente que dans le magnifique Grand Mosquée qui est aujourd’hui la cathédrale.{'\n'}
                        {'\n'}
                        Durant cette journée, nous vous suggérons :{'\n'}
                        Promenez-vous dans les salles de prière à colonnades, décorées de centaines de colonnes de marbre reliées par des arcs bicolores. Admirez le mihrab et les chapelles latérales, avec leur mélange éclectique de styles arabesque et baroque. Profitez du patio des orangers, une oasis de paix rafraîchie par l'ombre de 100 arbres, et découvrez les décorations arabesques de ses portes extérieures.{'\n'}
                        Continuez le tour en marchant vers l'ancien quartier juif bpour visiter la synagogue du 14ème siècle.{'\n'}
                        {'\n'}
                        Reprenez la route vers Grenade. Repas libres et nuit dans la région de Grenade.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 4 : GRENADE</Text>
                    <Text>Prenez votre petit déjeuner à l'hôtel avant la découverte de Grenade.{'\n'}
                        {'\n'}
                        Durant cette journée, nous vous suggérons :{'\n'}
                        Explorez la ville historique de Grenade et son plus grand trésor, le palais de l'Alhambra. Depuis plus de 1000 ans, cette « perle sertie émeraudes » s’est tenue au sommet de la colline de Sabika surplombant la ville. Le complexe royal et les jardins ont été construits pour être un paradis sur terre, avec patios, fontaines et sculptures complexes. Émerveillez-vous devant les nombreuses salles à couper le souffle, telles que la Cour des Myrtes etla salle des ambassadeurs, décorée de plâtres arabesques en nid d'abeilles élaborés. Admirez aussi la Cour des Lions, que les poètes islamiques du Moyen Age décrivaient comme la réalisation physique du paradis.{'\n'}
                        Continuez votre tour par le palais du Généralife. Promenez-vous dans ses jardins luxuriants au son apaisant de l'eau des canaux.Traversez le ravin verdoyant de la rivière Darro jusqu'au quartier historique d'Albaicín, Le quartier mauresque de l'Albaicín est un labyrinthe de ruelles et de placettes bordées d'une multitude de maisons blanchies à la chaux. Les maisons serpentent vers les différents points de vue offrant une vue imprenable sur l’Alhambra nichée sous la Sierra Nevada.{'\n'}
                        {'\n'}
                        Repas libres et nuit à Grenade.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 5 : GRENADE / SEVILLE</Text>
                    <Text>Après le petit déjeuner, retour sur Seville.{'\n'}
                        {'\n'}
                        Durant cette journée, nous vous suggérons :{'\n'}
                        Profitez de voir le reste de la ville de Séville. Découvrez les 80 chapelles et plus de 700 œuvres d'art religieux, voir l'étonnant autel doré - qui a pris 80 ans pour le faire - et se promener à travers la paisible Cour des Orangers.{'\n'}
                        Savourez un délicieux déjeuner tapas dans un restaurant typique (non inclus).{'\n'}
                        {'\n'}
                        Repas libres et nuit à l’hôtel à Séville.{'\n'}
                    </Text>
                    <Text style={styles.txtH3}>JOUR 6 : SEVILLE – VOL RETOUR</Text>
                    <Text>Après le petit déjeuner et selon vos horaires de vols retour, route vers l’aéroport pour la restitution de la voiture. Vous prendrez une navette de l’agence de location pour vous rendre au terminal de l’aéroport.{'\n'}
                        {'\n'}{'\n'}
                        *** Fin de nos services ****{'\n'}
                    </Text>
                </View>
            </ScrollView>

        </View>
    );
}


export default CircuitItem;

const styles = StyleSheet.create({
    containerView: {
        marginTop: 40,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    textMargin: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    txtCircuitLocation: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#02ADE5',
    },
    txtCircuitName: {
        fontSize: 14,
        color: '#858585',
    },
    imgCircuitBgContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imgHomeTopBannerBackground: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
    },
    circuitTopBannerAbsoluteView: {
        flex: 1,
        flexDirection: 'column',
        paddingTop:10,
    },
    imgHomeBackground: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    circuitBannerAbsoluteView: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    circuitTxtAbsoluteView: {
        height: 20,
        backgroundColor: 'white',
        opacity: 0.7,
        paddingLeft: 5,
        fontSize: 10,
    },
    imgCircuitBg: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderColor: 'white',
        borderWidth: 1,
    },
    circuitTxtAbsoluteView2: {
        height: 15,
        backgroundColor: 'white',
        opacity: 0.7,
        paddingLeft: 5,
        fontSize: 8,
    },
    txtH2: {
        marginVertical: 10,
        fontSize: 18,
        color: '#02ADE5',
    },
    txtH3: {
        fontSize: 14,
        marginBottom: 10,
        color: '#02ADE5',
    },
});