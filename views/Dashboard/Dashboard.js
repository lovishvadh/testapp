
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
// Helper package to read, write contacts for react-native
import Contacts from 'react-native-contacts';

import CustomButton from '../../components/CustomButton';
import { Spinner, Toast, Container, Content } from 'native-base';
import Colors from '../../constants/colors';
import { DangerToast } from '../../utils/toast';
import ContactModal from '../../components/Modals/ContactModal';
import ContactInfo from '../../components/ContactInfo';

const Dashboard = () => {
    const [permissionStatus, setPermissionStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [contacts, setContacts] = useState([])
    const [selectedPhoneNumber, setSelectedPhoneNumber] = useState([]);
    const [showContactsList, setShowContactsList] = useState(false);
    
    useEffect(() => {
        getContacts();
        return () => {}
      }, []);

    const getPermission = async () => {
        try {
            setLoading(true);
            let status = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
            if(!status) {
                status = (PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                    {
                        'title': 'Contacts',
                        'message': 'Please let us see your contacts!',
                        'buttonPositive': 'Well, okay!'
                    }
                ) === PermissionsAndroid.RESULTS.GRANTED);
            }
            setPermissionStatus(status)
            setLoading(false);
            return status;
        } catch(err) {
            setLoading(false);
        }
    }

    const getContacts = async () => {
        try {
            setLoading(true);
            if(!permissionStatus) {
                const status = await getPermission();
                if(!status) {
                    DangerToast(['Permission required to access contacts.']);
                    return
                };
            }
            const contacts = await Contacts.getAll();
            contacts.sort((a,b) => a.displayName > b.displayName)
            setContacts(contacts);
            setLoading(false);
        } catch(err) {
            console.log(err);
            DangerToast(['Could not get contacts. Please try later.']);            
            setLoading(false);
        }
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.contentContainer}>
                {selectedPhoneNumber.length !==0 && 
                    <View style={styles.contactContainer}>
                        <ContactInfo phoneNumbers={selectedPhoneNumber}/>
                    </View>
                }
                <View style={styles.buttonContainer}>
                    {!loading && <CustomButton text={"Contacts"} onPress={() => { getContacts(); setShowContactsList(true);} } />}
                    {loading && <Spinner color={Colors.primary} />}
                </View>
                <ContactModal loading={loading} selectedPhoneNumber={setSelectedPhoneNumber} showModal={showContactsList} onClose={() => setShowContactsList(false)} contacts={contacts}/>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        position:"relative", 
        flex:1
    },
    buttonContainer: {
       position: "absolute",
       bottom:0,
       left:0, right:0
    },
    contactContainer: {
        padding: 10
    }
});

export default Dashboard;
