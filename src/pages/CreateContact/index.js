import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { InputData } from '../../components';
import { ref, database, set } from '../../config/firebase';

export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      address: ''
    };
  }

  onChangeText = (stateName, value) => {
    this.setState({
      [stateName] : value
    });
  }

  onSubmit = () => {
    if(this.state.name && this.state.phoneNumber && this.state.address) {
      const contactRef = ref(database,'contact');
      const contact = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
      };
      set(contactRef,contact)
      .then((data) => {
        Alert.alert('Success', 'Kontak berhasil disimpan');
        this.props.navigation.replace('Home')
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      Alert.alert('Error', 'Nama, Nomor HP, dan Alamat tidak boleh kosong!')
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <InputData 
          label="Nama:" 
          placeholder="Masukkan nama" 
          onChangeText={this.onChangeText} 
          value={this.state.name} 
          stateName='name' 
        />
        <InputData 
          label="No. HP:" 
          placeholder="Masukkan nomor hp" 
          keyboardType='number-pad'
          onChangeText={this.onChangeText} 
          value={this.state.phoneNumber} 
          stateName='phoneNumber'  
        />
        <InputData 
          label="Alamat:" 
          placeholder="Masukkan alamat" 
          isTextArea={true} 
          onChangeText={this.onChangeText} 
          value={this.state.address} 
          stateName='address' 
        />
        <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
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