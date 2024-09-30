import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { InputData } from '../../components';

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <InputData label="Nama:" placeholder="Masukkan nama" />
        <InputData label="No. HP:" placeholder="Masukkan nomor hp" keyboardType='number-pad' />
        <InputData label="Alamat:" placeholder="Masukkan alamat" isTextArea={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 30
    },
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    textButton: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16
    }
});