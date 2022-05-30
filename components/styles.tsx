import { StyleSheet } from 'react-native';

{/* https://ethercreative.github.io/react-native-shadow-generator/ */}

const styles:any = StyleSheet.create({
    containerSafe: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 40,
    },
    containerView: {
      marginTop: 40,
      width: '100%',
      backgroundColor: '#ffffff',
    },
    imgBigLogo: {
      width: '60%',
      height: 90,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    imgSmallLogo: {
      width: '40%',
      height: 60,
      alignSelf: 'flex-start',
      resizeMode: 'contain',
    },
    imgHomeBackground: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    imgCircuitBgContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    imgCircuitBg: {
      width:'100%',
      height: 100,
      resizeMode: 'cover',
      borderColor: 'white',
      borderWidth: 1,
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
    txtTitleRubric: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
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
    circuitTxtAbsoluteView2: {
      height: 15,
      backgroundColor: 'white',
      opacity: 0.7,
      paddingLeft: 5,
      fontSize: 8,
    },
    txtCircuitDuration: {
      fontSize: 10,
      color: '#858585',
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

  export default styles;