import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputData = ({label, placeholder, keyboardType, isTextArea}) => {
    if(isTextArea) {
        return (
          <>
            <Text style={styles.label}>{label}</Text>
            <TextInput multiline={true} numberOfLines={4} placeholder={placeholder} style={styles.textInputArea} keyboardType={keyboardType} isTextArea={isTextArea}/>
          </>
        );
    }

    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput placeholder={placeholder} style={styles.textInput} keyboardType={keyboardType} isTextArea={isTextArea}/>
      </>
    );
}

export default InputData;

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      },
      textInputArea: {
        textAlignVertical:'top',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
      }
});
