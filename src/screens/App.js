import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import InputTextRegister from "../components/inputTextRegister";
import TitleText from "../components/Title-text";
import RadioInputChoice from "../components/Radio-Input-Choice";

const items = [
    {id: 0, label: 'Masculino'},
    {id: 1, label: 'Feminino'}
]

const App = () =>{
    return(
        <SafeAreaView>
            <TitleText
                text = {'Cadastro do Paciente'}
            />
            <View style={styles.marginInput}>
                <InputTextRegister
                    text={'Nome'}
                />
                <InputTextRegister
                    text={'CPF'}
                />
                <InputTextRegister
                    text={'Data de Nascimento'}
                />
                <InputTextRegister
                    text={'Peso(KG)'}
                />
                <InputTextRegister
                    text={'Altura'}
                />
                <RadioInputChoice
                    items={items}
                    initialChoice={0}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
   marginInput:{
        marginBottom: 20,
        marginHorizontal: 23,
   },
})

export default App