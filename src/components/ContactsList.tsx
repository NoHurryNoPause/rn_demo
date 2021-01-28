import React, { useEffect } from "react";
// Components
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
// Redux
import { getContacts } from "../actions/ContactActions";
import { RootStore } from '../Store'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Types
import { ContactType } from "../actions/ContactTypes"


export function ContactsList() {
    const { contacts, status } = useSelector((state: RootStore) => state.contact)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    useEffect(() => {
        if (status === "idle") {
            dispatch(getContacts())
        }
    }, [contacts, navigation]);

    return (
        <FlatList
            data={contacts}
            keyExtractor={item => item.id.value}
            renderItem={({ item }) => <Contact contact={item} />}
        />
    )
}

function Contact({ contact }: { contact: ContactType }) {
    const navigation = useNavigation()
    const goToContact = () => {
        navigation.navigate("Contact Details", contact)
    }
    return (
        <TouchableOpacity onPress={goToContact} style={styles.contactContainer} key={contact.id.value}>
            <Image style={styles.avatar} source={{ uri: contact.picture.large }} />
            <View style={styles.nameDetails}>
                <Text style={styles.primaryText}>{contact.name.first}</Text>
                <Text style={styles.secondaryText}>{contact.name.last}</Text>
            </View>
            <View style={styles.email}>
                <Text style={styles.primaryText}>{contact.email}</Text>
                <Text style={styles.secondaryText}>{contact.location.city}, {contact.location.state}</Text>
            </View>
        </TouchableOpacity>
    )
}

const darkGrey = "#8e8e8e"
const neutralGrey = "#b0b0b0"
const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 5
    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: neutralGrey,
        padding: 15,
        justifyContent: "space-between"
    },
    email: {
        display: "flex",
        flex: 3,
        alignItems: "flex-end",
        justifyContent: "space-evenly"
    },
    nameDetails: {
        display: "flex",
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-evenly"
    },
    primaryText: {
        fontSize: 14
    },
    secondaryText: {
        fontSize: 12,
        color: darkGrey
    },
})