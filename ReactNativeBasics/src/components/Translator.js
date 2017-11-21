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

  componentWillMount() {
    this.shuffleEmojis();
  }

  getEmoji(word) {
    const { emojis } = this.state;
    return `${emojis[word.length % emojis.length]} `;
  }

  shuffleEmojis() {
    const emojis = this.state.emojis.map(emoji => emoji);
    emojis.forEach((emoji, index) => {
      const x = Math.floor(Math.random() * (index + 1));
      emojis[index] = emojis[x];
      emojis[x] = emoji;
    });
    this.setState({ emojis });
  }

  handleChange(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={styles.main}>
        <TextInput
          autoFocus
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
