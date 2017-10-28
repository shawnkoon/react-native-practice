import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Note extends Component {
  render() {
    return (
      <View style={styles.note}>
        <View style={styles.noteText}>
          <Text>{this.props.note.date}</Text>
          <Text>{this.props.note.text}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={this.props.handleDelete}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#FFD460',
  },
  deleteButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D4059',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    top: 10,
    bottom: 10,
    right: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

Note.propTypes = {
  note: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
  }),
  handleDelete: PropTypes.func,
};
