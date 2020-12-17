import React from 'react';
import {View,Text} from 'react-native';
  class ExploreScreen extends React.Component {
    render()
    {
        return(
          <View style = {{flex : 1, justifyContent : "center", alignItems:"center", backgroundColor: '#fff'}}>
          <Text>This is my Explore Screen </Text>
           </View>
        )
    }
}
export default ExploreScreen;
