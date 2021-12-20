import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image,Alert, ScrollView, FlatList, TextInput } from 'react-native'
// interface Props {
//     visible: false
// }
import TouchID from 'react-native-touch-id'
 const App: React.FC = (props) => {
     const [isAuth , setIsAuth] = useState(false);


    useEffect(()=>{
        handleBiometric();
    });

    const optionalConfigObject = {
        title: 'Provide Your Touch Id', // Android
        imageColor: '#e00606', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };
    const handleBiometric = () =>{
        TouchID.isSupported(optionalConfigObject).then((biometryType)=>{
            if (biometryType === 'FaceID') {
                console.log('FaceID is supported.');
            } else {
                console.log('TouchID is supported.');
                if(isAuth){
                    return null;
                }
                TouchID.authenticate('to demo this react-native component', optionalConfigObject).then(success => {
                        Alert.alert('Authenticated Successfully');
                        setIsAuth(success);
                        props.navigation.navigate("Home");
                    })
                    .catch(error => {
                        Alert.alert('Authentication Failed');
                        console.log('Error', error);
                    })

                
            }
          })
          .catch(error => {
            // Failure code
            console.log(error);
          })

        }
    
    return (
            <View>
                <Text>
                 LOGIN PAGE
                </Text>
            </View>
        )
    }
    export default App;
        const styles = StyleSheet.create({
            container:{
                flex:1,
            }
        })