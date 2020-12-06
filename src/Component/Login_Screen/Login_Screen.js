import React, { Fragment } from 'react';
import {View,Text,StyleSheet, Image, ScrollView, TextInput,TouchableOpacity} from 'react-native';
class Login_Screen extends React.Component{
    render()
    {
        return(
            <Fragment>
                <ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                style = {styles.scrollback}>
          <View /*style = {{backgroundColor:"#800000"}}*/>
           <Text style = {styles.container_one}>Sign Up</Text>              
          </View>
          <View /*style = {{backgroundColor:"#808000"}}*/>
              <Text style = {styles.container_two}> WHO YOU ARE?</Text>
          </View>
          <View style = {{flex:1,flexDirection:"row"/*,backgroundColor : "#FFFF00"*/}}>
              <View style = {styles.container_third}>
              <Image
        source={require('../../../assest/Sign_Up/student.png')}/>
              </View>
              <View style = {styles.container_third}>
              <Image
        source={require('../../../assest/Sign_Up/professional.png')}/>          
              </View>
          </View>
              <View style = {{position : "relative"/*,backgroundColor:"#FF0000"*/}}>
               <TextInput placeholder = 'Username' textAlign = "center" style = {styles.container_four}>
                    </TextInput>
               <TextInput placeholder = 'Email' textAlign = "center" style = {styles.container_four}></TextInput>
               <TextInput placeholder = 'Password' textAlign = "center" style = {styles.container_four}></TextInput>
               <TextInput placeholder = 'Confirm Password' textAlign = "center" style = {styles.container_four}></TextInput>
          </View>
          <View>
          <TouchableOpacity style = {styles.container_five}>
              <Text style = {{ textAlign: "center",marginTop:10,color:"#FFFFFF"}}>Sign Up</Text>
              </TouchableOpacity>       
          </View>
          <View style = {{flex:1,flexDirection:"row",marginTop:20}}> 
              <Text style = {{marginLeft:70}}> Already have an account.</Text>
              <Text style = {{color:"#FF5733"}}>Login Here</Text>
          </View>
            </ScrollView>
            </Fragment>
        );
    }

}

const styles = StyleSheet.create({
  container_one : {
      marginTop: 50,
      textAlign: "center",
      fontSize: 20,
      fontFamily:'Sans-serif'
  },
  container_two : {
    marginTop: 25,
    color : '#9C9C9C',
    textAlign: "center",
    fontSize: 15
},
  scrollback: {
      backgroundColor: "#CAE5DE"
  },
  container_third: {
    height:100,
    width:100,
    //backgroundColor:'yellow',
    marginTop:25,
    marginLeft:70
  },
  container_four : {
      height: 40,
    marginLeft: 70,
    marginTop: 20,        
    width : 250,
    backgroundColor:'#9C9C9C',    
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    
  },
  container_five : {
   height: 40,
  marginLeft: 60,
  marginTop: 20,        
  width : 270,
  backgroundColor:'#13A845',    
  borderTopLeftRadius: 50,
  borderTopRightRadius:50,
  borderBottomRightRadius:50,
  borderBottomLeftRadius:50
}

})
export default Login_Screen;