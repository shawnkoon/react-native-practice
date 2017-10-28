import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Note from './components/Note';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      noteText: '',
    };
  }

  addHandler() {
    if (this.state.noteText) {
      const d = new Date();
      this.setState({
        notes: [
          ...this.state.notes,
          {
            date: `${d.getFullYear()}/${d.getMonth()}/${d.getDate()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
            text: this.state.noteText,
          },
        ],
        noteText: '',
      });
    }
  }

  changeHandler(noteText) {
    this.setState({ noteText });
  }

  deleteHanlder(index) {
    this.state.notes.splice(index, 1);
    this.setState({ notes: this.state.notes });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TodoKoon</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {this.state.notes.map(({ date, text }, key) => (
            <Note key={key} note={{ date, text }} handleDelete={() => this.deleteHanlder(key)} />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={() => this.addHandler()}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.changeHandler(noteText)}
            value={this.state.noteText}
            placeholder="Type here..."
            placeholderTextColor="white"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EA5455',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollViewContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#F07B3F',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 45,
    backgroundColor: '#2D4059',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
});
