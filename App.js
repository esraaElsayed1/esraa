/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Header from './component/Header'

import Elements from './component/Elements';
import Element from './component/Element';



const App = () => {
  return (
    <View style={{ flex: 1, alignContent: "flex-start" }}>
      <StatusBar backgroundColor="red" animated={true} />


      <Header title={'Clothes'} />

      <ScrollView contentContainerStyle={{flex:1}}  style={{  flex:1, height:"100%",paddingVertical:20}} >


        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
          <Elements />
          <Element />
        </View>

      </ScrollView>
    </View>
  );
}




export default App;
