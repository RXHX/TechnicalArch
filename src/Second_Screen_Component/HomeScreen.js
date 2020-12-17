import React, {Component} from 'react';

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Button,
  Dimensions,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class ScanScreen extends Component {
  state = {
    isVisible: false,
  };

  renderResults = () => {
    this.setState({
      isVisible: !this.state.isVisible, //toggles the visibilty of the text
    });
  };

  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  // Binding function with this class.
  callFun = () => {
    //alert("Image Clicked!!!");
  };

  render() {
    return (
      
        <View style={{ flex:1, backgroundColor: '#FFF'}}>
          {this.state.isVisible ? (
            <QRCodeScanner
            
              onRead={this.onSuccess}
              flashMode={RNCamera.Constants.FlashMode.torch}
              topContent={
                // <Text style={styles.centerText}>
                //   Go to{' '}
                  <Text style={styles.textBold}>
                    wikipedia.org/wiki/QR_code</Text> 
                //     {/* on
                //   your computer and scan the QR code. */}
                // {/* </Text> */}
              }
         
            />
          ) :  <TouchableOpacity onPress={this.renderResults} style = {{width:50,height:50,marginLeft: Dimensions.get('screen').width - 55}}>
          <Image
            source={require('../../assest/Main_Screen/home.png')}
            style={{
              width: 50,
              height: 50,
            }}></Image>
        </TouchableOpacity>}
         
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
