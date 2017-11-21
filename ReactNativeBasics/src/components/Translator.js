// Lib
import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export class EmojiTranslator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: ['😀', '😊', '😘', '🤑', '😎', '👍', '💩', '🎃', '🤖', '🍖', '🍕', '🥑', '🥗', '🍟', '🍎', '⚽️'],
      text: '',
    };
  }

  getEmoji(word) {
    const { emojis } = this.state;
    return `${emojis[word.length % emojis.length]} `;
  }

  handleChange(text) {
    this.setState({ text });
  }


  render() {
    return (
      <View style={styles.main}>
        <TextInput
          value={this.state.text}
          placeholder="Type something here..."
          onChangeText={text => this.handleChange(text)}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ')
            .map(word => word && this.getEmoji(word))
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
  },
  input: {
    height: 50,
  },
  text: {
    padding: 20,
    fontSize: 50,
  },
});
