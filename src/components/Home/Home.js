import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import * as CONSTANTS from '../../utils/constants'
import Logo from '../../../assets/logoservice.png'

const navigateScannerScreen = (props) => props.navigation.navigate('Scanner');

const scanCodeHandler = (props) => {
    navigateScannerScreen(props)
}

const HomeScreen = props => {

    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <ImageBackground style={styles.maxWidthHeight} source={Logo} />
            </View>
            <View style={styles.contentContainer}>
                <Button
                    title={CONSTANTS.default.scanTitle}
                    onPress={() => scanCodeHandler(props)}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    maxWidthHeight: {
        width: '100%',
        height: 100
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8F8F8',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    titleContainer: {
        height: CONSTANTS.default.screenHeight / 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen); 