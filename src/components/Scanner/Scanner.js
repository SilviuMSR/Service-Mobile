import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const navigateDetailsScreen = (data) => {
        props.navigation.navigate('ItemDetails', { data })
    };

    const successfullyScanned = ({ type, data }) => {
        setScanned(false);
        navigateDetailsScreen(data)
    };

    if (hasPermission === null) {
        return <Text>In order to work, we need access to camera!</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : successfullyScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );
}