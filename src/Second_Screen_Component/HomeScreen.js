import React, { Component } from 'react';

import {
   View,
   Image,StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Button,
  Dimensions
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class ScanScreen extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <View >
       <View style = {{backgroundColor:"#FFF456"}}>
   <Image source = {require('F:/TechnicalArch-main/assest/Main_Screen/home.png')} style = {{width:30,height:30,marginLeft:Dimensions.get('screen').width-35}}></Image>
        <QRCodeScanner
          cameraStyle = {{width:50,height:150}}
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          cameraStyle = {{width:30,height:30,marginLeft:160,marginTop:20}}
         />
         </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    width:40,
    height:40,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default ScanScreen; 