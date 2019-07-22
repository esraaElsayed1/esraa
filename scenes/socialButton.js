import React, { useState, useEffect, Component } from 'react';
import { Container, Content, Footer, Card, CardItem, FooterTab, H2, Item, Button, Left, Right, Body, Icon, Text, Form, Label, Input } from 'native-base';
import { Scene, Stack, Router } from 'react-native-router-flux'
import { Header } from 'react-native-elements';
const SocialButton = (props) => {
    return (
        
            <Content>
                <Button border rounded danger style={{ flex: 1, alignItems: "center", justifyContent: "center", shadowOpacity: 0.8, shadowColor: "grey" }}>
                   
                    <Text style={{ fontSize: 12 }}>Sign Up </Text>

                </Button>

                <Body>
                    <Text style={{ fontSize: 11 }}>Or {props.name} with social account</Text>
                </Body>



                {/* <CardItem> */}
                    <Button transparent style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>

                        <Text>{props.name}   with  {props.type1}</Text>
                        <Icon name={props.icon1} />
                    </Button>
                {/* </CardItem> */}
                {/* <CardItem> */}

                    <Button transparent style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

                        <Text>{props.name} with {props.type2}</Text>
                        <Icon name={props.icon2} />
                    </Button>
                {/* </CardItem> */}
            </Content>


       


    );

}
export default SocialButton;