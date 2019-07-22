import React, { useState, useEffect, Component } from 'react';
import { Container, Content, Footer, Card, CardItem, FooterTab, H2, Item, Button, Left, Right, Body, Icon, Text, Form, Label, Input } from 'native-base';
import { Scene, Stack, Router } from 'react-native-router-flux'
import { Header } from 'react-native-elements';
import SocialButton from './socialButton'
const Log = () => {
    return (

        <Container style={{backgroundColor:"ffff", padding:10}}>

            <Content >

               

                <H2  > Log into</H2>
                <H2>your account </H2>



                <Form bordered >
                    
                    <Item floatingLabel regular>
                        <Label style={{fontSize:11}}>
                            Email
                            </Label>
                      
                        <Input />
                    </Item>
                    <Item floatingLabel regular last  >
                        <Label style={{fontSize:11}} >Password</Label>
                        <Input  secureTextEntry={true} />
                    </Item>
                    <Item>

                    </Item>
                </Form>
               

                <SocialButton name="Sign up " type1='Facebook'  type2='Googleplus' icon1='logo-facebook' icon2='logo-googleplus'/>
            </Content>


        </Container>


    );

}
export default Log;