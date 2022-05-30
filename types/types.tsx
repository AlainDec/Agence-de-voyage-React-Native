// https://reactnavigation.org/docs/typescript
// On déclare le type des pages afin de gérer les paramètres dans les routes.
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IData, IGalery } from '../interfaces/interfaces';

type RootStackParamList = {
    Home: undefined;
    CircuitItem: { itemCircuit: any };
    CircuitItemZoomPhoto: {
        itemPhoto: IGalery,
    };
    Services: undefined;
    Contact: undefined;
};

type CircuitScrollingProps = NativeStackScreenProps<RootStackParamList, 'CircuitItem'>;
type CircuitScrollingPhotoProps = NativeStackScreenProps<RootStackParamList, 'CircuitItemZoomPhoto'>;
type ServicesProps = NativeStackScreenProps<RootStackParamList, 'Services'>;
type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

export { CircuitScrollingProps, CircuitScrollingPhotoProps, ServicesProps, ContactProps, RootStackParamList };
