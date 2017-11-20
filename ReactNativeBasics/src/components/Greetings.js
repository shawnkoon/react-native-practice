// Lib
import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Greeting = props => (
  <Text>Hello {props.name} :)</Text>
);

export class Greetings extends React.Component {
  render() {
    return (
      <View style={styles.greetings}>
        <Greeting name="shawnkoon" />
        <Greeting name="You" />
        <Greeting name="I am prop" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greetings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
