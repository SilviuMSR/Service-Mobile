import { Dimensions } from 'react-native';

export default {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    scanTitle: "SCAN CODE",
    backendURL: 'http://192.168.2.107:9000/pieces/barcode/',
    detailsFields: {
        name: 'name',
        id: '_id',
        no: 'no',
        price: 'price',
        code: 'code'
    },
    detailsLabels: {
        id: 'ID',
        carbrand: 'Car Brand',
        carmodel: 'Car Model',
        name: 'Name',
        no: 'Disponibility',
        price: 'Price',
        code: 'Bar code'
    },
    success: "Successfully received informations",
    noData: "No results found!",
    wait: "Searching for results...",
    main: "GO TO MAIN",
    noAccess: "No access to camera",
    requireAccess: "In order to work, we need access to camera!"
};