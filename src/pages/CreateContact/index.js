import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <Text>Tambah Kontak</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 30
    } 
});