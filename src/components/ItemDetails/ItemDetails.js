import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import * as CONSTANTS from '../../utils/constants'

class HomeScreen extends Component {


    state = {
        currentStock: null,
        renderPage: false
    }

    componentDidMount() {
        return axios.get(`${CONSTANTS.default.backendURL}${this.props.navigation.state.params.data}`).then(result => {
            this.setState({
                renderPage: true,
                currentStock: result.data[0]
            })
        })
    }


    render() {

        const fieldsToDisplay = [
            { field: CONSTANTS.default.detailsFields.id, label: CONSTANTS.default.detailsLabels.id },
            { field: CONSTANTS.default.detailsFields.name, label: CONSTANTS.default.detailsLabels.carbrand, populate: 'carBrandId' },
            { field: CONSTANTS.default.detailsFields.name, label: CONSTANTS.default.detailsLabels.carmodel, populate: 'carModelId' },
            { field: CONSTANTS.default.detailsFields.name, label: CONSTANTS.default.detailsLabels.name },
            { field: CONSTANTS.default.detailsFields.no, label: CONSTANTS.default.detailsLabels.no },
            { field: CONSTANTS.default.detailsFields.price, label: CONSTANTS.default.detailsLabels.price },
            { field: CONSTANTS.default.detailsFields.code, label: CONSTANTS.default.detailsLabels.code }
        ]

        if (this.state.renderPage) {
            if (this.state.currentStock) {
                return (
                    <View style={styles.container} >
                        <View style={styles.contentContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>{CONSTANTS.default.success}</Text>
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
                            }} title={CONSTANTS.default.main} />
                        </View>
                    </View >
                );
            } else return (
                <View style={styles.container} >
                    <View style={styles.contentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{CONSTANTS.default.noData}</Text>
                        </View>
                        <Button onPress={() => {
                            this.props.navigation.navigate('Home')
                        }} title={CONSTANTS.default.main} />
                    </View>
                </View >
            );
        }
        else return (
            <View style={styles.container} >
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{CONSTANTS.default.wait}</Text>
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