import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ContactCard = ({id, contact, navigation, removeContact}) => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => navigation.navigate('Contact Detail', {
                id: id
            })}
            >
            <View>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.phoneNumber}>No. HP: {contact.phoneNumber}</Text>
            </View>
            <View style={styles.icon}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit Contact', {
                    id: id
                    })}>
                    <FontAwesomeIcon icon={faEdit} color='orange' size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeContact(id)}>
                    <FontAwesomeIcon icon={faTimes} color='red' size={25} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default ContactCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    phoneNumber: {
        fontSize: 12,
        color: 'gray'
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});