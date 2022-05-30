import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Logo from './Logo';
import { CircuitScrollingPhotoProps } from '../types/types';

const CircuitItemZoomPhoto: React.FC<CircuitScrollingPhotoProps> = ({ navigation, route }: CircuitScrollingPhotoProps): JSX.Element => {

    const { itemPhoto } = route.params;

    if (itemPhoto === undefined) {
        return (<View><Text>Erreur</Text></View>)
    }
    
    return (
        <View style={styles.containerView}>
            <ScrollView>
                <Logo size='small' direction='left' />
                <Image source={itemPhoto.img} style={styles.imgHomeBackground} />
                <View style={styles.textMargin}>
                    <Text style={styles.txtH2}>{ itemPhoto.name }</Text>
                    <Text>{itemPhoto.resume}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default CircuitItemZoomPhoto;

const styles = StyleSheet.create({
    imgHomeBackground: {
        width: '100%',
        height: 300,
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