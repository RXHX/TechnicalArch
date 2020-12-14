import React, { Fragment } from 'react';
import {View,Text,StyleSheet, Image, ScrollView, TextInput,TouchableOpacity,Dimensions} from 'react-native';
class Login_Screen extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
          info : 0
      }
    }
    
        
    render()
    {
        changestatus = () =>{
            this.setState({
                info : 1
            })
           }
        if(this.state.info == 1) {
            return (
                <Fragment>
                    <ScrollView>
                <View style = {{backgroundColor:'#FFFF45'}}>
                  <Text>Hello</Text>
                </View>
                </ScrollView>
                </Fragment>
            )

        }
        else {

            return(
                <Fragment>
                    <ScrollView 
                    contentInsetAdjustmentBehavior="automatic"
                    style = {styles.scrollback}>
                   <View style = {{backgroundColor:'#FFFF90'}}>
                   </View>   
                      <View style = {styles.MainView} >
                      <View>
                     <Text style = {styles.container_one}>Sign Up</Text>              
                    </View>
                    {/* <View>
                     <Text style = {styles.container_one}>Sign Up</Text>              
                    </View>
                    <View>
                        <Text style = {styles.container_two}> WHO YOU ARE?</Text>
                    </View>
                    <View style = {{flex:1,flexDirection:"row"}}>
                        <View style = {styles.container_third}>
                        <Image
                  source={require('../../../assest/Sign_Up/student.png')}/>
                        </View>
                        <View style = {styles.container_third}>
                        <Image
                  source={require('../../../assest/Sign_Up/professional.png')}/>          
                        </View>
                    </View> */}
                        <View style = {{position : "relative"}}>
                         <TextInput placeholder = 'Username' textAlign = "center" style = {styles.container_four}>
                              </TextInput>
                         <TextInput placeholder = 'Email' textAlign = "center" style = {styles.container_four}></TextInput>
                         <TextInput placeholder = 'Password' textAlign = "center" style = {styles.container_four}></TextInput>
                         <TextInput placeholder = 'Confirm Password' textAlign = "center" style = {styles.container_four}></TextInput>
                    </View>
                    <View>
                    <TouchableOpacity style = {styles.container_five}>
                        <Text style = {{ textAlign: "center",marginTop:5,color:"#FFFFFF"}} onPress = {changestatus}>Sign Up</Text>
                        </TouchableOpacity>       
                    </View>
                    <View style = {{flex:1,flexDirection:"row",marginTop:20}}> 
                        {/* <Text style = {{marginLeft:20}}> Already have an account.</Text>
                        <Text style = {{color:"#FF5733"}}>Login Here</Text> */}
                    </View>
                    </View>
                </ScrollView>
                </Fragment>
            );
                    }
    }

}

const styles = StyleSheet.create({
    MainView : {
        backgroundColor:'#FFFF43',
        marginTop: 100,
        marginLeft: 50,
        marginRight: 50,
        alignItems : 'center'      
    },
  container_one : {
      marginTop: 40,
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
      backgroundColor: "#CAE5DE",
      opacity: 2
      
  },
  container_third: {
    height:100,
    width:100,
    //backgroundColor:'yellow',
    marginTop:25,
    marginLeft:70
  },
  container_four : {
      height: 35,
    marginLeft: 10,
    marginTop: 20,        
    width : 150,
    fontSize:10,
    backgroundColor:'#9C9C9C',    
    borderTopLeftRadius: 50,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,   
  },
  container_five : {
   height: 30,
  marginLeft: 10,
  marginTop: 20,        
  width : 150,
  backgroundColor:'#13A845',    
  borderTopLeftRadius: 50,
  borderTopRightRadius:50,
  borderBottomRightRadius:50,
  borderBottomLeftRadius:50
}
})
export default Login_Screen;