import React from 'react';
import {View,Text} from 'react-native';
class ProfileScreen extends React.Component {
    render() {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
          <Text> This is my Profile screen </Text>
        </View>
      );
    }
  }
  export default ProfileScreen;