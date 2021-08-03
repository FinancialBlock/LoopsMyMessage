import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {listUsers} from "../UserFleetList/queries";

export default class SearchContacts extends React.Component {
    state = {
        firstQuery: 'listUsers',
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <View style={{flex: 1, paddingTop: 100}}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                />
            </View>
        );
    }
}
