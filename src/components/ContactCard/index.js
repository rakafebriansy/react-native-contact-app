import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactCard = ({key, contact}) => {
    return (
        <View>
            <Text key={key}>{contact.name}</Text>
        </View>
    );
}

export default ContactCard;
