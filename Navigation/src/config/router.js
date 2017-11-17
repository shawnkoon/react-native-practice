// Lib
import * as React from 'react';

// App
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import { Feed, Me } from '../components';

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
  },
  Me: {
    screen: Me,
  },
});
