import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { database } from '../../config/firebase';
import { ref, get } from 'firebase/database';
import { ContactCard } from '../../components';

export default class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
                contacts: {},
                contactsKey: []
        };
    };

    fetchContacts = async () => {
        try {
            const contactRef = ref(database, 'contact');
            const snapshot = await get(contactRef);

            if(snapshot.exists()) {
                let data = snapshot.val();
                let contactItem = {...data};

                this.setState({
                    contacts: contactItem,
                    contactsKey: Object.keys(contactItem)
                });
            } else {
                this.setState({
                    contacts: {},
                    contactsKey: []
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
        const { contacts, contactsKey } = this.state;

        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar Kontak</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.listOfContact}>
                    {contactsKey.length > 0 ? (
                        contactsKey.map((key) => (
                            <ContactCard cardKey={key} contact={contacts[key]} id={key} />
                        ))
                    ) : (
                        <Text>Daftar kosong</Text>
                    )}
                </View>
                <View style={styles.wrapperBtn}>
                    <TouchableOpacity style={styles.createBtn} onPress={() => this.props.navigation.navigate('Create Contact')}>
                        <FontAwesomeIcon icon={faPlus} size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    line: {
        borderWidth: 1,
        marginTop: 10
    },
    listOfContact: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    wrapperBtn: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    createBtn: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});