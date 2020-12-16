import React, { Component } from 'react';
import RenderIf from '../Renderer/RenderIf';
import {
   View,
   Image,StyleSheet,
    Linking,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


class ScanScreen extends Component {
  
constructor(props)
{
   super(props);
   this.state = {
     active : false
   }

}


onSuccess = e => {
  Linking.openURL(e.data).catch(err =>
    console.error('An error occured', err)
  );
};

 
  render() {
 
    onclickerable = () => {
      this.setState({
        active : true
      })
     
      console.log('Reached Here'+this.state.active);
   }
 
 
    return (
      <View style={{ flex:1,backgroundColor: '#fff' }}>
     <TouchableHighlight onPress = {onclickerable} style = {{height:50,width:50,marginLeft:300}}>
       {
         this.state.active ?
         <QRCodeScanner
         onRead={this.onSuccess}
         flashMode={RNCamera.Constants.FlashMode.torch}
         cameraStyle = {{marginLeft:-150}}
        />
           :
           <Image 
           source = {require('../../assest/Main_Screen/home.png')}
           style = {{height:50,width:50}}
           >
          </Image>
       }
   </TouchableHighlight>
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