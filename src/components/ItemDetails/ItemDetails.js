import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

class HomeScreen extends Component {


    state = {
        currentStock: null,
        renderPage: false
    }

    componentDidMount() {
        return axios.get(`http://192.168.2.107:9000/pieces/barcode/${this.props.navigation.state.params.data}`).then(result => {
            this.setState({
                renderPage: true,
                currentStock: result.data[0]
            })
        })
    }


    render() {

        const fieldsToDisplay = [
            { field: '_id', label: 'ID' },
            { field: 'name', label: 'Car Brand', populate: 'carBrandId' },
            { field: 'name', label: 'Car Model', populate: 'carModelId' },
            { field: 'name', label: 'Name' },
            { field: 'no', label: 'Disponibilty' },
            { field: 'price', label: 'Price' },
            { field: 'code', label: 'Bar code' }
        ]

        if (this.state.renderPage) {
            if (this.state.currentStock) {
                return (
                    <View style={styles.container} >
                        <View style={styles.contentContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>Successfully received informations</Text>
                            </View>
                            <View style={styles.dataContainer}>
                                {fieldsToDisplay.map((field, index) => {

                                    if (field.populate) {
                                        return (
                                            <View key={index} style={styles.flexRow}>
                                                <Text style={styles.keyText}>{field.label}:</Text>
                                                <Text style={styles.valueText}>{this.state.currentStock[field.populate][field.field]}</Text>
                                            </View>
                                        )
                                    }

                                    return (
                                        <View key={index} style={styles.flexRow}>
                                            <Text style={styles.keyText}>{field.label}:</Text>
                                            <Text style={styles.valueText}>{this.state.currentStock[field.field]}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            <Button onPress={() => {
                                this.props.navigation.navigate('Home')
                            }} title="MAIN" />
                        </View>
                    </View >
                );
            } else return (
                <View style={styles.container} >
                    <View style={styles.contentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>No results found!</Text>
                        </View>
                        <Button onPress={() => {
                            this.props.navigation.navigate('Home')
                        }} title="MAIN" />
                    </View>
                </View >
            );
        }
        else return (
            <View style={styles.container} >
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Searching for results...</Text>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    dataContainer: {
        padding: 20
    },
    keyText: {
        fontWeight: "500"
    },
    valueText: {
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F8F8F8',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 19,
        marginRight: 19,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
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