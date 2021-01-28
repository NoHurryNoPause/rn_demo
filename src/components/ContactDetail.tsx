import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
// Types
import { ContactType } from "../actions/ContactTypes"

export const SectionDetail = ({ detail, value }: { detail: string, value: string }) => {
    return (
        <View style={styles.contactInfo} >
            <Text style={styles.detail}>{detail}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export const Header = ({ contact }: { contact: ContactType }) => {
    return (
        <View style={styles.headerContainer}>
            <Image style={styles.avatar} source={{ uri: contact.picture.large }} />
            <Text style={styles.first}>{contact.name.first} {contact.name.last}</Text>
            <Text style={styles.last}>{contact.email}</Text>
        </View>
    )
}

const darkGrey = "#8e8e8e"
const styles = StyleSheet.create({
    avatar: {
        borderRadius: 70,
        height: 140,
        width: 140,
    },
    contactScreen: {
        display: "flex",
        alignItems: "center",
        marginVertical: 20
    },
    detail: {
        fontSize: 16
    },
    value: {
        fontSize: 16
    },
    first: {
        fontSize: 21,
        marginVertical: 10
    },
    last: {
        color: darkGrey,
        fontSize: 18,
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        flex: 3
    },
    contactInfo: {
        display: "flex",
        flexDirection: "row",
        borderColor: darkGrey,
        borderTopWidth: 1,
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
        width: "90%",
    }
})