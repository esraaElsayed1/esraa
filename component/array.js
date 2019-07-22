
import Element from './Element';
import React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';


  const List= (props) =>{
    return (
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
        {props.items.map((item) => (
          <Item  item={item} />
        ))}
      </View>
    );
  }
  export default List;