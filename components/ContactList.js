import React from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import colors from '../constants/colors';
import font from '../constants/font';
/* Displays ContactInfo info passed from ContactList */
const ContactInfo = ({ name, hasThumbnail, thumbnail, phoneNumbers, firstName, lastName, selectedPhoneNumber }) =>  
{
    return(
        <TouchableOpacity style={styles.item} onPress={() => selectedPhoneNumber(phoneNumbers)}>
            <View style={{padding: 5}}>
                { hasThumbnail && <Image source={{ uri: thumbnail }} style={styles.thumbnailImg} /> }
                {
                    !hasThumbnail && 
                    <View style={styles.thumbnailPlaceholderContainer}>
                        <Text style={styles.placholderText}>{`${firstName.slice(0,1)}${lastName.slice(0,1)}`}</Text>
                    </View>
                }
            </View>
            <View style={{ justifyContent: "center" }}>
                <Text style={styles.title}>{ name }</Text>
                {phoneNumbers.map(ele => <Text key={ele.id} style={styles.title}>{`${ele.label} : ` + ele.number}</Text>)}
            </View>
        </TouchableOpacity>
    )};

const ContactList = ({ contacts, selectedPhoneNumber }) => {
 /* renders each contact in contacts */
  const renderItem = ({ item }) => (
    <ContactInfo selectedPhoneNumber={selectedPhoneNumber} name={item.displayName} firstName={item.givenName} lastName={item.familyName} hasThumbnail={item.hasThumbnail} thumbnail={item.thumbnailPath} phoneNumbers={item.phoneNumbers}/>
  );

  if(contacts.length) {
      return (
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.recordID}
          />
      );
  } else {
    //   Display no contact found when length of contacts is zero.
      return (
          <View><Text>No contacts found.</Text></View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginBottom: 8,
        marginHorizontal: 8,
        flexDirection: "row",
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.4)'
    },
    title: {
        textTransform: "capitalize"
    },
    thumbnailImg: { 
        width: 60, 
        height: 60, 
        borderRadius: 50, 
        borderWidth:3, 
        borderColor: colors.primary
    },
    thumbnailPlaceholderContainer: {
        width: 60, 
        height: 60, 
        borderWidth:3, 
        borderColor: colors.primary, 
        borderRadius: 50, 
        justifyContent: "center", 
        alignItems: "center" 
    },
   placholderText: { 
        textTransform: "uppercase", 
        fontWeight: font.WEIGHT_BOLD, 
        color: colors.primary 
    }
});

export default ContactList;