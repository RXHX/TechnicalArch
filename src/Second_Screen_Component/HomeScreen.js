import React, { Component } from 'react';
import {
  View,
  Image,StyleSheet,
  Linking,
  Text,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class ScanScreen extends Component {
  
constructor(props)
{
   super(props);
   this.value = new Animated.ValueXY({
    x:0,
    y:Dimensions.get('window').height
  })
   this.state = {
     active : false,
   };
} 

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

 

  render() 
  {
    onclickerable = () => {
      this.setState({
        active : true,
        animationactive:this.state.animationactive
      })
     
      console.log('Reached Here'+this.state.active);
   }
 
   starting = () => {
    Animated.timing(this.value,{
      toValue: { x:0, y:30},
      duration:500,
      useNativeDriver: false
    }).start();
   }

   closing = () => {
    Animated.timing(this.value,{
      toValue: { x:0, y:550},
      duration:500,
      useNativeDriver: false
    }).start();
    
   }

    return (
      <View style = {{flex:1,backgroundColor:'#fff'}}>   
   
     <View style = {{flex:1,flexDirection:"row",backgroundColor:"#fff"}}>    
     
     
     <View style = {{height:30,width:30,marginLeft:10,marginTop:10}}>
     <TouchableHighlight onPress = {starting} activeOpacity={0.6}
  underlayColor="#FFFFFF">
     <Image 
     source = {require('../../assest/Main_Screen/Location.png')}
     style = {{height:30,width:30}}>
     </Image>
     </TouchableHighlight>
     </View>



     <View style = {{height:30,width:120,marginLeft:10,marginTop:10}}>
     <Text style = {styles.textBold}>Other-Patparganj</Text>  
     </View>
      
     
     <View style = {{height:30,width:30,marginLeft:150,marginTop:10}}>
     <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress = {onclickerable} style = {{height:30,width:30}}>
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
           style = {{height:30,width:30}}
           >
          </Image>
       }
   </TouchableHighlight>
   </View>


   </View>

 <Animated.View style = {this.value.getLayout()} >
    <View style={styles.container}>
      <View style = {{flexDirection:'row'}}>
      <Text style = {styles.buttonText}>Search Location</Text>
      <TouchableHighlight onPress = {closing} activeOpacity={0}
  underlayColor="#FFFFFF">
      <Image source = {require('../../assest/Main_Screen/cross.png')} style = {{height:60,width:60,marginTop:10,marginLeft:150}} onMagicTap = {closing}></Image>
      </TouchableHighlight>
      </View>
      <View style = {{marginTop:10}}>
        <TextInput 
        placeholder = "Search for your location"
        //  inlineImageLeft = "search"
        //   inlineImagePadding = {10}
        style = {{borderRadius:4,borderWidth:3,marginLeft:10,marginRight:10}}
        />
        
      </View>
      </View> 
 </Animated.View>
 </View>
);
  }

}  
  const styles = StyleSheet.create({
  textBold: {
    fontSize: 15,
    fontWeight:'bold',
    color: "#000000",
    textDecorationLine: 'underline'
  },
  buttonText: {
    fontSize: 15,
    fontWeight:'bold',
    color: "#000000",
    marginTop:10,
    padding:20
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor:"#ffff57"
  },
  container: {
    height: 550,
    width: Dimensions.get('window').width
  }
  
});

export default ScanScreen; 
