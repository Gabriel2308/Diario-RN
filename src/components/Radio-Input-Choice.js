import React, { useState } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default ({initialChoice, items, horizontal = false, margin = null, marginBottom = null, onSelect, error = null }) =>{
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
            {error && <ErrorText text={error} />}
        </>
    );
}

const styles = StyleSheet.create({
    descriptionInput:{
        fontFamily: 'montserratSemi',
        fontSize: 17,
        marginBottom: 4,
        color: '#000000',
        fontWeight: 'bold'
    },
})