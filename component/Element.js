import React from 'react';
import { Image, Text, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Element = (props) => {
   return (
      <View style={{ flex: 1,margin:3, backgroundColor: "white", elevation: 2 }}>
         <Image style={{ flex: 1 , height:60,width:150}}
            source={{ uri:props.name }}></Image>
         <Text style={{ marginRight: 20, }}>{props.type}</Text>
         <View style={{ flex: 1, flexDirection: "row" }}>
            <Icon style={{ paddingRight: 10 }} name={props.icon} size={25} color="red" ></Icon>
            <Text style={{ marginHorizontal: 50 }}>{props.number}</Text>

         </View>
      </View>

   );
}
export default Element;   