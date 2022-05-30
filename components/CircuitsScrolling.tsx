import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import data from '../data/circuits';
import { CircuitScrollingProps } from '../types/types';

const CircuitsScrolling: React.FC<CircuitScrollingProps> = ({ route, navigation }: CircuitScrollingProps):JSX.Element => {

    return (
        <>
            <Text style={styles.txtTitleRubric}>Les circuits Worldfly</Text>
            <ScrollView style={styles.circuitContainer} horizontal={true}>
            {
                data.map( (value: any, index: number) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CircuitItem', {itemCircuit: value})}
                            key={value.id}
                        >
                            <View 
                                style={styles.circuitCard}
                                >
                                <Image 
                                    source={value.img}
                                    style={styles.circuitCardImg} />
                            
                                <View style={styles.circuitCardContent}>
                                    <View style={styles.circuitCardContentLeft}>
                                        <Text style={styles.txtCircuitLocation}>{value.location}</Text>
                                        <Text style={styles.txtCircuitName}>{value.name}</Text>
                                        <Text style={styles.txtCircuitDuration}>{value.duration}</Text>
                                    </View>
                                    <View style={styles.circuitCardContentRight}>
                                        <Text style={styles.circuitCardTxtFrom}>&Agrave; partir de</Text>
                                        <Text style={styles.circuitCardTxtPrice}>{value.price}&euro;</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity >
                    )
                })
            }
            </ScrollView>
        </>
    );
}

export default CircuitsScrolling;

const styles = StyleSheet.create({
    txtTitleRubric: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
      },
      circuitContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
      },
      circuitCard: {
        width: 300,
        height: 380,
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        marginLeft: 4,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,      
        elevation: 5,
      },
      circuitCardImg: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
      },
      circuitCardContent: {
        flexDirection: 'row',
        padding: 10,
      },
      circuitCardContentLeft: {
        width: '70%',
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
      circuitCardContentRight: {
        width: '30%',
        paddingLeft: 5,
        textAlign: 'right',
      },
      txtCircuitDuration: {
        fontSize: 10,
        color: '#858585',
      },
      circuitCardTxtFrom: {
        fontSize: 9,
        color: '#858585',
        textAlign: 'right',
      },
      circuitCardTxtPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#02ADE5',
        textAlign: 'right',
      },
});