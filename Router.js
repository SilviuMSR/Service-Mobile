import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/components/Home/Home';
import ScannerScreen from './src/components/Scanner/Scanner';
import ItemDetailsScreen from './src/components/ItemDetails/ItemDetails'

const ApplicationStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Scanner: {
        screen: ScannerScreen
    },
    ItemDetails: {
        screen: ItemDetailsScreen
    }
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(ApplicationStack);