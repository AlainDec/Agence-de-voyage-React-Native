import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Logo = (props:any) => {
    let sizeLogo:any = props.size === 'tall' ? styles.imgBigLogo : styles.imgSmallLogo;
    return (
        <Image 
            source={require('../assets/logo.png')}
            style={sizeLogo} />
    );
}

export default Logo;