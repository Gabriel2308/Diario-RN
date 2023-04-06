import React from "react";
import { TextInput, Text, StyleSheet,View } from "react-native";


export default ({...props}) =>{
    return(
        <View>
            <Text style={styles.descriptionInput}>{props.text}</Text>
            <TextInput
                maxFontSizeMultiplier={1.1}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionInput:{
        fontFamily: 'montserratSemi',
        fontSize: 17,
        marginBottom: 4,
        color: '#000000',
        fontWeight: 'bold'
    },
    input:{
        borderWidth: 1.5,
        borderColor: '#00A1DE',
        textAlignVertical: 'bottom',
        fontSize: 16,
        borderRadius: 4,
        height: 42,
    },
    container:{

    }
})