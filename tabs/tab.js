import React  from 'react';

import { Container,  Tab, Tabs} from 'native-base';
import Tab1 from './tabOne'
 
 const Page =()=>{
return (
    <Container>
    
        
            <Tabs  >
              <Tab tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"white"}} textStyle={{color:"black"}} activeTabStyle={{backgroundColor:"#D4606F"}} heading="Weddings">
                <Tab1/>
              </Tab>
              <Tab  tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"white"}} textStyle={{color:"black"}} activeTabStyle={{backgroundColor:"#D4606F"}} heading="Events"  >
               
              </Tab>
              <Tab  tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"white"}} textStyle={{color:"black"}} activeTabStyle={{backgroundColor:"#D4606F"}} heading="Invitations">
                
              </Tab>
            </Tabs>
           
            </Container>
)
}
export default Page