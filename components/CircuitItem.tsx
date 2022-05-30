import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Logo from './Logo';
import styles from './styles';
import data from '../data/circuits';
import { IData, IGalery } from '../interfaces/interfaces';
import { CircuitScrollingProps } from '../types/types';

const BigImage = ({ dataItem, index }: any ) => (
    <TouchableOpacity style={{ width: '100%', height: 300 }} key={index}>
        <ImageBackground source={dataItem?.galery[0]?.img} style={styles.imgHomeBackground}>
            <View style={styles.circuitBannerAbsoluteView}>
                <Text style={styles.circuitTxtAbsoluteView}>{dataItem?.galery[0]?.name}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

const SmallImage = ({ dataGalery }: any) => (
    <TouchableOpacity style={{ width: '33.3333%', height: 100 }}>
        <ImageBackground source={dataGalery.img} style={styles.imgCircuitBg}>
            <View style={styles.circuitBannerAbsoluteView}>
                <Text style={styles.circuitTxtAbsoluteView2}>{dataGalery?.name}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

const CircuitItem: React.FC<CircuitScrollingProps> = ({ navigation, route }: CircuitScrollingProps): JSX.Element => {
    const { itemCircuitId } = route.params;
    if (data[itemCircuitId] == undefined || data[itemCircuitId].galery == undefined) {
        return (<View><Text>coucou</Text></View>)
    } else {
        let galeryData: IGalery[] = data[itemCircuitId].galery;
        console.log(itemCircuitId);
        return (
            <View style={styles.containerView}>
                <ScrollView>
                    <Logo size='small' />
                    <View style={styles.textMargin}>
                        <Text style={styles.txtCircuitLocation}>{data[itemCircuitId].location}</Text>
                        <Text style={styles.txtCircuitName}>{data[itemCircuitId].name}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>

                        <BigImage dataItem={data[itemCircuitId]} />

                        <View style={styles.imgCircuitBgContainer}>
                            {
                                galeryData.map((value: IGalery, index) => {
                                    {/* ne prends pas en compte l'index 0 */}
                                    return index > 0 && (
                                        <SmallImage dataGalery={value} index={index} />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default CircuitItem;