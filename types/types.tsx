// https://reactnavigation.org/docs/typescript
// On déclare le type des pages afin de gérer les paramètres dans les routes.
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    CircuitItem: { itemCircuitId: number };
    CircuitItemZoomPhoto: { itemPhotoId: number }
};

type CircuitScrollingProps = NativeStackScreenProps<RootStackParamList, 'CircuitItem'>;
type CircuitScrollingPhotoProps = NativeStackScreenProps<RootStackParamList, 'CircuitItemZoomPhoto'>;

export { CircuitScrollingProps, CircuitScrollingPhotoProps };
