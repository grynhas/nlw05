import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Platform } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(true);

    function handleVisibility() {
        (visible) ? setVisible(false) : setVisible(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil.
            </Text>
            {
                visible &&
                <Image style={styles.image} source={wateringImg} />
            }

            <Text style={styles.subtitle} >
                Não esqueça mais de regar suas plantas.
                Nós cuidaremos de lembrar você
                sempre que precisar.
            </Text>

            <Button title="➡" onPress={handleVisibility} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 25 : 0 //no NLW ele roda com IOS mas no Android tive que fazer a validação dessa forma
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    image: {
        width: 292,
        height: 284,
    },
});
