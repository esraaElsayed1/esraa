
import React  from 'react';
import {Text}from 'native-base';
import { TabNavigator } from 'react-native-tabbar-navigator';
const BTab = () => {
     const [,set]=useState(0)
    return (
        <TabNavigator>
        <TabNavigator.Item
          selected={}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {homeView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {profileView}
        </TabNavigator.Item>
        <TabNavigator>
        <TabNavigator.Item
          selected={}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {homeView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {profileView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {profileView}
        </TabNavigator.Item>
    </TabNavigator>
    )}
    export default BTab;