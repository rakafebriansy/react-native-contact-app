import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactCard = ({cardKey, contact}) => {
    return (
        <View>
            <Text key={cardKey}>{contact.name}</Text>
        </View>
    );
}

export default ContactCard;
