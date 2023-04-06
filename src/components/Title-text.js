import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default ({...props}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 12,
        marginBottom: 10,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: 'center',
   },
   title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000'
   }
})