// Lib
import React, { Component } from 'react';

// App
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem title="Notifications" />
          <ListItem title="Profile" />
          <ListItem title="Password" />
        </List>
        <List>
          <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} />
        </List>
      </ScrollView>
    );
  }
}
