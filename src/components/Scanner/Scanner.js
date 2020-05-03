import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as CONSTANTS from '../../utils/constants'

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
        return <Text>{CONSTANTS.default.requireAccess}</Text>;
    }
    if (hasPermission === false) {
        return <Text>{CONSTANTS.default.noAccess}</Text>;
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