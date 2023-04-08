import React, { useState } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
} from 'react-native'

/*
 * Componente radioInput.
 * @function
 * @param {Object} props - Propriedades necessárias para o estilo e funcionamento do RadioInput
 * @param {function} props.onSelect - Evento que ocorre ao selecionar uma opção.
 * @param {object} props.items - Conjunto de dados a serem colocados no Radio.
 * @param {bool} props.horizontal - Se radiobutton é horinzontal ou vertical.
 * @param {Integer} props.margin - Margem personalizada para espaçamento quando na horizontal.
 * @param {String} props.initialChoice - Id da escolha inicial.
 * @returns Componente radioInput com estilo aplicado.
 */

export default ({ initialChoice, items, horizontal = false, margin = null, marginBottom = null, onSelect, error = null }) => {
    const [selected, setSelected] = useState(initialChoice);

    const container = horizontal
        ? { flexDirection: 'row', justifyContent: 'space-around' }
        : { flexDirection: 'column', }

    const alignText = horizontal
        ? {}
        : { flexWrap: 'wrap', flex: 1, }

    return (
        <>
            <View style={container}>
                {
                    items.map((item, index) => {
                        return (
                            <View key={index} style={[{ marginBottom: 5 }, marginBottom && { marginBottom }]}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        setSelected(item.id)
                                        onSelect(item.id)
                                    }}>
                                    <View style={styles.alignContainer}>
                                        <View style={styles.checkContainer}>
                                            {
                                                selected == index ?
                                                    <View style={styles.check} />
                                                    : null
                                            }
                                        </View>
                                        <Text allowFontScaling={false} style={[styles.label, alignText]}>{item.label}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )
                    })
                }
            </View>
            {/* {error && <ErrorText text={error} />} */}
        </>
    );
}

const styles = StyleSheet.create({
    alignContainer: {
        flexDirection: 'row',
    },
    checkContainer: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "#000000",
        alignItems: 'center',
        justifyContent: 'center',
    },
    check: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: "#000000",
    },
    label: {
        textAlign: 'justify',
        color: "#00A1DE",
        marginHorizontal: 10,
    },
});