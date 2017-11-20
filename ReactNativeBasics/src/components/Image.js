import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

export class ImageTest extends React.Component {
  render() {
    const picture = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };

    return (
      <Image source={picture} style={styles.image} />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 193,
    height: 100,
  },
});
