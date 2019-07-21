
import React from 'react';

import { ListItem,List,Left, Thumbnail,Text,Body,Right} from 'native-base';
import {Scene,Stack,Router, Actions} from 'react-native-router-flux'
const Data=(props)=>
{
    return (
      
            
        <List>
            <ListItem  thumbnail style={{elevation:3}}>
            <Left>
            <Thumbnail large source={{uri: props.image}} />
            </Left>
           <Body > 
          <Text  style={{fontSize:14, fontWeight:"bold" , flex:1}}>{props.title}</Text>
            <Text  note numberOfLines={3} style={{fontSize:12,  flex:1}}>
              Descriotion is the most effective panel and your advice is appreciated but keep it on
            </Text>
          </Body>
         
        </ListItem>
  </List>
);
}
export default Data;