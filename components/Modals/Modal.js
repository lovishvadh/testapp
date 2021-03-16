import React from "react";
import {
  Modal,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from "react-native";
import colors from "../../constants/colors";
import font from "../../constants/font";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const GeneralModal = ({ renderComponent, showModal, onClose, modalHeading }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        presentationStyle="overFullScreen"
      >
        <View style={styles.modalContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.content} >
                <TouchableOpacity
                    style={{ padding: 10,paddingHorizontal: 20, position:"absolute", right: 0, top:0 }}
                    onPress={() => {
                        onClose();
                    }}
                >
                    <Text style={{fontWeight: font.WEIGHT_BOLD, fontSize: font.SIZE_TITLE}}>X</Text>
                </TouchableOpacity>
                <View
                    style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
                    onPress={() => {
                        onClose();
                    }}
                >
                    <Text style={{fontWeight: font.WEIGHT_BOLD, fontSize: font.SIZE_TITLE}}>Contacts</Text>
                </View>
                <View style={{paddingVertical: 10}}>
                    { renderComponent() }
                </View>
                </View>
            </View>
        </View>
           
      </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: { 
        backgroundColor: "rgba(0,0,0,0.4)", 
        justifyContent: "center", 
        alignItems:"center", 
        flex: 1
    },
    contentContainer: {
        maxHeight: deviceHeight * 0.9, 
        width: deviceWidth * 0.9 , 
        borderRadius: 5,
    },
    content: {
        position: "relative", 
        backgroundColor: "white", 
        paddingVertical: 10, 
        paddingHorizontal: 10, 
        borderRadius: 5,
    }
});

export default GeneralModal;