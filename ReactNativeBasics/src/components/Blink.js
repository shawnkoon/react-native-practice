// Lib
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isDisplaying: false, text: props.text };

    setInterval(() => {
      this.setState(prevState => ({ isDisplaying: !prevState.isDisplaying }));
    }, props.interval);
  }

  render() {
    const { isDisplaying, text } = this.state;

    return (
      <Text>{isDisplaying ? text : '.....'}</Text>
    );
  }
}

export const BlinkApp = () => (
  <View style={styles.main}>
    <Blink interval={2000} text="My name is Shawnkoon!" />
    <Blink interval={1000} text="I am interval 1000" />
    <Blink interval={1000 / 2} text={`I am interval ${1000 / 2}`} />
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
