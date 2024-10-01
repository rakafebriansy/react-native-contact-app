import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { database } from '../../config/firebase';
import { ref, get } from 'firebase/database';

export default class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {}
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
                    contact: contactItem,
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

  render() {
    const {contact} = this.state;
    return (
      <View style={styles.pages}>
        <Text>Nama: </Text>
        <Text style={styles.text}>{contact.name}</Text>
        <Text>No. HP: </Text>
        <Text style={styles.text}>{contact.phoneNumber}</Text>
        <Text>Alamat: </Text>
        <Text style={styles.text}>{contact.address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    pages: {
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
});