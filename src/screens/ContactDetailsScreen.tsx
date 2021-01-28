import React, { useState } from 'react'
import { Route } from '@react-navigation/native';
import { StyleSheet } from "react-native"
// Components
import { ScrollView } from 'react-native-gesture-handler';
import { Header, SectionDetail } from '../components/ContactDetail'
// Types
import { ContactType } from '../actions/ContactTypes';

export default function ContactDetailsScreen({ route }: { route: Route<"Contact Details", ContactType> }) {
    const [contact] = useState(route.params)

    return (
        <ScrollView contentContainerStyle={styles.contactScreen}>
            <Header contact={contact} />
            <SectionDetail detail="Country" value={contact.location.country} />
            <SectionDetail detail="City" value={contact.location.city} />
            <SectionDetail detail="State" value={contact.location.state} />
            <SectionDetail detail="Postal Code" value={contact.location.postcode} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contactScreen: {
        display: "flex",
        alignItems: "center",
        marginVertical: 20
    },
})