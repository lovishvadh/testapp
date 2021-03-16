import React from "react";
import {
  Modal,
  Dimensions,
  TouchableOpacity,
  Text
} from "react-native";
import GeneralModal from "./Modal";
import ContactList from "../ContactList";
import { Spinner } from "native-base";
import colors from "../../constants/colors";

export default function ContactModal({loading , showModal,contacts, onClose, selectedPhoneNumber}){
    const renderContactList = () => {
        if(loading) {
            return <Spinner color={colors.primary} />
        }
        return (
             <ContactList selectedPhoneNumber={(phoneNumber) => {selectedPhoneNumber(phoneNumber); onClose()}} contacts={contacts}/>
        );
    }
    return (
        <GeneralModal renderComponent={renderContactList} showModal={showModal} onClose={onClose}/>
    );
}
