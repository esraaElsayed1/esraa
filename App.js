/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React ,{useState , useEffect,Component} from 'react';

import { Container, Header,Content, Tab, Tabs} from 'native-base';
// import Element from './component/Element';
import {Scene,Stack,Router, Actions} from 'react-native-router-flux'
import Register from './scenes/register'
import Data from "./tabs/content"
import Tab1 from './tabs/tabOne'
import { colors } from 'react-native-elements';
import Page from './tabs/tab'
import Login from './tabs/login'
 const App = ( ) => {

  
//   const data=[
//     { name:"Baby_cloth", image:"https://ae01.alicdn.com/kf/HTB1nL.fQpXXXXcOXVXXq6xXFXXX8/Baby-Clothes-5-Pieces-lot-Baby-Romper-Girl-and-Boy-Short-Sleeve-Summer-Clothing-Newborn-Sets.jpg"},
//     { name:"Baby_cloth", image:"https://ae01.alicdn.com/kf/HTB1nL.fQpXXXXcOXVXXq6xXFXXX8/Baby-Clothes-5-Pieces-lot-Baby-Romper-Girl-and-Boy-Short-Sleeve-Summer-Clothing-Newborn-Sets.jpg"},
//     { name:"Baby_cloth", image:"https://ae01.alicdn.com/kf/HTB1nL.fQpXXXXcOXVXXq6xXFXXX8/Baby-Clothes-5-Pieces-lot-Baby-Romper-Girl-and-Boy-Short-Sleeve-Summer-Clothing-Newborn-Sets.jpg"},
//     { name:"Baby_cloth", image:"https://ae01.alicdn.com/kf/HTB1nL.fQpXXXXcOXVXXq6xXFXXX8/Baby-Clothes-5-Pieces-lot-Baby-Romper-Girl-and-Boy-Short-Sleeve-Summer-Clothing-Newborn-Sets.jpg"},
//    { name:"Baby_cloth", image:"https://ae01.alicdn.com/kf/HTB1nL.fQpXXXXcOXVXXq6xXFXXX8/Baby-Clothes-5-Pieces-lot-Baby-Romper-Girl-and-Boy-Short-Sleeve-Summer-Clothing-Newborn-Sets.jpg"}
//   ]

// const array =[]

 // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//   let x=0
// const [counter,setCounter]=useState(0)
// useEffect(()=>{
//   // will mount , did mount , will recieve props   
//      x++
//      console.log(x)

//        return ()=>{
//          // will unmount
//         x=0
//          console.log(x)
//        }
// }, [x])
// const Elements= ()=>{
// for (i=0;i<data.length-1;i+=2){
//   array.push(
//     <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }} key={i}>
//       <Element number='200 sold' type={data[i].name} icon='heart' name={data[i].image} />
//       {data[i+1]&& <Element number='200 sold' type={data[i+1].name} icon='heart' name={data[i+1].image} />
//     }
//       </View>
//   )
// }
// return array;
 
// }
  return (

//<Page/>
<Login />
    // <Router>
    //   <Stack key="root">
    //   <Scene key="register"  component={Register} hideNavBar={true}/>
    //      <Scene key="login"   component={Login} hideNavBar={true}  /> 
    //     {/* <Scene key="home"   component={Home}/>  */}
    //   </Stack>
    // </Router>

   
      

//     <View style={{ flex: 1, alignContent: "flex-start" ,}}>
//       <StatusBar backgroundColor="red" animated={true} />


//       <Header  title='shopping-bag' Title='Clothes' name='arrow-left'/>

//       <ScrollView contentContainerStyle={{ }}  showsVerticalScrollIndicator={false}  style={{  height:"100%",paddingVertical:20}} >
//               {/* {data.map((value,i)=>{
//                 return(
//                       <View style={{ flex: 1, flexDirection: "row", alignContent: "flex-start", padding: 10 }}>
//                       <Element number='200 sold' type={value.name} icon='heart' name={value.image} />
//                       <Element number='200 sold' type={value.name} icon='heart' name={value.image} />
//                     </View>
//               );})} */}
                      	
      
        
//                      <Elements /> 
   
 
//       </ScrollView> 
//       {/* <Text>{counter}</Text>
//       <TouchableOpacity  onPress={()=> {
        
//         console.log(counter)
//         }}>
//         <Text>add one</Text>
//       </TouchableOpacity> */}
//     </View>


);
}

 



export default App;