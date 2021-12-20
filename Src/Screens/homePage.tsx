import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TouchableOpacity,Alert } from 'react-native';

import firebase from '@react-native-firebase/app';
import "@react-native-firebase/firestore";




const { height, width } = Dimensions.get('screen');
// interface Props {
//     visible: false
// }
var data = [{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},]
 const App: React.FC = (props) => {
     

    const [favourite , setFavourite] = useState<boolean | false>(false);
   // var [data , setData] = useState();

    const addItem = async() =>{
        console.log("i am here ")
        
            try{

              firebase.firestore().collection("Items").get().then((resp)=>{
                    console.log("i am here in if====> get ",resp.docs.length);
                   const temp = resp.docs;
                   
                    resp.docs.forEach((item)=>{
                        console.log("item====>",item.data())
                        
                    })
                },()=>{
                    console.log("in error")
                })
               
            }catch(err){   
                console.log(err);
            }

          
            // try {
            //     const docRef = await addDoc(collection(db, "Items"), {
            //         title,
            //         descrption,
            //         timeStamp:Date.now(),
            //         favourite:false,
            //     });
            //     console.log("Document written with ID: ", docRef.id);
            //   } catch (e) {
            //     console.error("Error adding document: ", e);
            //   }
              

        
        }

  
    
    return (
        <View >

        
        <ScrollView
        nestedScrollEnabled={true}
        style={{

            marginBottom: 0,
            width: '100%',
            height:height*0.75
            

        }}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ height: height * 0.12, borderRadius: height * 0.02, marginTop: height * 0.02, alignSelf: 'center', width: width * 0.95, backgroundColor: 'white' ,flexDirection:'row'}}

                >

                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('detail')}
                    style={{ height: height * 0.12, borderRadius: height * 0.02, width: width * 0.74, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row'}}>                        
                            <View style={{marginLeft:width*0.05, marginTop:height*0.02, width:width*0.6}}>
                                <Text>
                                    {item.title}
                                </Text>
                                <Text>
                                    {item.description}
                                </Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row'}} >
                            <View style={{width:width*0.65}}>

                            </View>
                            
                        </View>
                       
                    </TouchableOpacity>

                    <View>
                    {item.favourite == true ? (
                                <TouchableOpacity style={{marginLeft:width*0.05, marginTop:height*0.02,}}>
                                <Image style={{height:height*0.04,width:height*0.046}}
                                    source={
                                        require("../../assests/images/likes.png")
                                    }/>
                                </TouchableOpacity>
                                
                            ): <TouchableOpacity style={{marginLeft:width*0.1, marginTop:height*0.02}}>
                                <Image style={{height:height*0.04,width:height*0.045}}
                                    source={
                                        require("../../assests/images/unlike.png")
                                    }/>
                                </TouchableOpacity>
                            
                            }

                            <View style={{marginTop:height*0.01}}>
                               <Text>
                                   {item.date}
                                </Text> 
                            </View>
                    </View>
                </View>
            )}
            style={{ marginTop: 10 }}
        />
    </ScrollView>
    <View style={{marginLeft:width*0.8, marginTop:height*0.01}} >
        <TouchableOpacity onPress={() => props.navigation.navigate('editupdate')}>
            <Image style={{height:40,width:40}} source={ require("../../assests/images/plus.png") }/>
        </TouchableOpacity>
    </View>

    </View>
        )
    }


  export default App; 
      
    const styles = StyleSheet.create({})