import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { InputData } from '../../components';
import { database } from '../../config/firebase';
import { ref, update, get } from 'firebase/database';

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      address: ''
    };
  }

    fetchContacts = async () => {
        try {
            const contactRef = ref(database, `contact/${this.props.route.params.id}`);
            const snapshot = await get(contactRef);

            if(snapshot.exists()) {
                let data = snapshot.val();
                let contactItem = {...data};

                this.setState({
                    name: contactItem.name,
                    phoneNumber: contactItem.phoneNumber,
                    address: contactItem.address,
                });
            } else {
                this.setState({
                    contact: {},
                });
            }
        } catch (error) {
            console.log('Error while fetching contacts: ', error);
        }
    }

    componentDidMount() {
        this.fetchContacts();
    }

    onChangeText = (stateName, value) => {
        this.setState({
        [stateName] : value
        });
    }

    onSubmit = () => {
        if(this.state.name && this.state.phoneNumber && this.state.address) {
        const contactRef = ref(database,`contact/${this.props.route.params.id}`);
        const contact = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
        };
        update(contactRef,contact)
        .then((data) => {
            Alert.alert('Success', 'Kontak berhasil diperbarui');
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