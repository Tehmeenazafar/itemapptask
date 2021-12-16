// import firebase from 'firebase/compat'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import { getFirestore } from "firebase/firestore"
// import { collection, addDoc } from "firebase/firestore"; 

import firebase from '@react-native-firebase/app';
import "@react-native-firebase/firestore";


import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TextInput, Alert,TouchableOpacity } from 'react-native'

import { Input,Button } from '../components'

// interface Props {
//     visible: false
// }
 const App: React.FC = (props) => {
     const [title , setTitle] = useState<string | null>(null);
     const [descrption , setDescription] = useState<string | null>(null);

    const addItem = async() =>{
        console.log("i am here ")
        if(title && descrption){
            console.log("i am here 2")
            const data = {
                date:Date.now(),
                descrption,
                favourite:false,
                title,           
            }
            try{



                firebase.firestore().collection("Items").add({
                    date:Date.now(),
                    descrption,
                    favourite:false,
                    title,           
                }).then((resp)=>{
                    console.log("i am here in if add data====> ",resp);
                   
                },()=>{
                    console.log("in error")
                })

              firebase.firestore().collection("Items").get().then((resp)=>{
                    console.log("i am here in if====> get ",resp.docs.length);
                    resp.docs.forEach((item)=>{
                        console.log("item====>",item.data())
                    })
                },()=>{
                    console.log("in error")
                })
               


                // console.log("i am here 3===>",data)
                // firebase.firestore()
                // .collection('Items')
                // .doc('5SsEyli5iSBGM3zfHlM2')
                // .set({
                //     date:Date.now(),
                //     descrption,
                //     favourite:false,
                //     title,           
                // })
                // .then((response) => {
                //     console.log('response');
                // },(err)=>{
                //     console.log("i am here 4 err===>",err)
                // });

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
              

        }else{
            Alert.alert('error', 'Missing Fields');
        }

    }
    return (
            <View style={{margin:'2%', flex:1}}>
                <View>
                    <Text>
                        Title
                    </Text>
                    <Input placeholder="title"  onChangeText ={(text) => setTitle(text)}/>
                    
                </View>
                <View>
                    <Text>
                        Description
                    </Text>
                    <Input placeholder="descrption"  onChangeText ={(text) => setDescription(text)}/>
                </View>
                <Button title="Add" onPress={addItem} />
            </View>
        )
    }
    export default App;
    const styles = StyleSheet.create({})