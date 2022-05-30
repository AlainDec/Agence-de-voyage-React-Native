import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface Result {
    size: 'tall' | 'small',
    direction: 'left' | 'center'
}

const Logo = (props: Result) => {
    const sizeLogo:Object = props.size === 'tall' ? styles.imgBigLogo : styles.imgSmallLogo;
    const directionLogo:Object = props.direction === 'left' ? styles.imgLeftLogo : styles.imgCenterLogo;

    return (
        <Image 
            source={require('../assets/logo.png')}
            style={[sizeLogo, directionLogo]} />
    );
}

export default Logo;

const styles:any = StyleSheet.create({
    imgBigLogo: {
      width: '60%',
      height: 90,
      resizeMode: 'contain',
    },
    imgSmallLogo: {
      width: '40%',
      height: 60,
      alignSelf: 'flex-start',
      resizeMode: 'contain',
    },
    imgCenterLogo: {
        alignSelf: 'center',
    },
    imgLeftLogo: {
        alignSelf: 'flex-start',
    }
  });