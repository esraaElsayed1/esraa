import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Head =(props)=>{
    return(
    <View style={{height:40,backgroundColor:"red"}}>
    <View style={{flex:1,flexDirection:"row"}}>
    <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:"center"}} >
    <Icon name={props.title} size={25} color="#fff" ></Icon>
    </TouchableOpacity>
    <View style={{flex:5,alignItems:"center",justifyContent:"center"}}> 
    <Text style={{fontSize:25,color:"white",fontWeight:'bold'}}>{props.Title}</Text>
    </View>
    <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Icon name= {props.name} size={25} color="#fff" ></Icon>
    </TouchableOpacity>
    </View>
    </View>
    );
}
export default Head;