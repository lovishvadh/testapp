
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import font from '../constants/font';
import colors from '../constants/colors';

const ContactInfo = ({ phoneNumbers }) => {
  return (
    <View style={styles.contactContiner}>
        <Text style={styles.header}>Selected Contact:</Text>
        {phoneNumbers.map(number => <Text style={styles.contactText}><Text style={styles.contactNumberTitle}>{number.label}</Text> : {number.number}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: font.SIZE_TITLE,
        fontWeight: font.WEIGHT_BOLD
    },
    contactContiner: {
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:5,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,0.5)",
        padding: 20
    },
    contactText: {
        fontSize: font.SIZE_SUBTITLE,
        fontWeight: font.WEIGHT_MEDIUM,
        textTransform: "capitalize"
    },
    contactNumberTitle: {
        fontSize: font.SIZE_SUBTITLE,
        fontWeight: font.WEIGHT_BOLD
    }
});

export default ContactInfo;
