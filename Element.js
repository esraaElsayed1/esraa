import React from 'react';
import { Image,Text, View,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Element =()=>{
    return(
      <View style={{ flex: 1, backgroundColor:"white",elevation:2}}>
      <Image style={{flex:1}}
        source={{uri: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=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'}}></Image>
      <Text  style ={{ marginRight:20,}}>T.shirt</Text>
      <View style={{flex:1,flexDirection:"row" }}>
      <Icon  style={{paddingRight:10}}  name="heart" size={25} color="red" ></Icon>
      <Text style ={{marginHorizontal:50}}>200 sold</Text>
      
      </View>
      </View>
      
        );
        }
        export default Element;