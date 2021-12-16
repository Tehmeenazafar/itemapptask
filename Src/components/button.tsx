import React , {FC} from 'react'
import { View,Text,TextInput, StyleSheet, Dimensions ,TouchableOpacity} from 'react-native'
const {height,width} =Dimensions.get('screen');

interface Props{
    title:string;
    onPress:()=>void;

}
const App:FC<Props> =(props) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
export default App;

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#000",
        borderRadius:8,
        padding:10,
        paddingHorizontal:20,
        width:width/1.7,
        marginVertical:10,
    },
    text:{
       color:'#fff'
    }
})