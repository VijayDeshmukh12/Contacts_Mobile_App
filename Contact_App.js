import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    // Load contacts when the app is launched
    const loadContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err) {
                console.error(err);
                return;
            }
            setContacts(contacts);
        });
    };

    // Filter contacts based on search text
    const filteredContacts = contacts.filter(contact =>
        contact.givenName.toLowerCase().includes(searchText.toLowerCase())
    );

    // Display contact details in a popup
    const showContactDetails = contact => {
        setSelectedContact(contact);
    };

    // Close the contact details popup
    const closeContactDetails = () => {
        setSelectedContact(null);
    };

    return ( <
        View style = { styles.container } >
        <
        TextInput style = { styles.searchBox }
        placeholder = "Search contacts..."
        value = { searchText }
        onChangeText = { text => setSearchText(text) }
        /> {
            filteredContacts.map(contact => ( <
                TouchableOpacity key = { contact.recordID }
                style = { styles.contactItem }
                onPress = {
                    () => showContactDetails(contact) } >
                <
                Text > { contact.givenName } < /Text> <
                Text > { contact.phoneNumbers[0].number } < /Text> <
                /TouchableOpacity>
            ))
        } <
        Modal visible = { selectedContact !== null }
        animationType = "slide"
        transparent = { true } >
        <
        View style = { styles.modalContainer } >
        <
        View style = { styles.modalContent } >
        <
        Text > { selectedContact ? .givenName } < /Text> <
        Text > { selectedContact ? .phoneNumbers[0] ? .number } < /Text> <
        TouchableOpacity onPress = { closeContactDetails }
        style = { styles.closeButton } >
        <
        Text style = { styles.closeButtonText } > Close < /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        /Modal> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    searchBox: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    contactItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        color: 'blue',
        fontSize: 16,
    },
});

export default App;