import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: "https://i.pravatar.cc/150?img=3" }}
                style={styles.avatar}
            />
            <Text style={styles.name}>Akash Chouhan</Text>
            <Text style={styles.subtext}>Travel Enthusiast</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Past Trips</Text>
                <View style={styles.item}>
                    <FontAwesome5 name="umbrella-beach" size={18} color="#0077FF" style={styles.icon} />
                    <Text style={styles.cardItem}>Bali (2023)</Text>
                </View>
                <View style={styles.item}>
                    <FontAwesome5 name="mountain" size={18} color="#0077FF" style={styles.icon} />
                    <Text style={styles.cardItem}>Manali (2024)</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Upcoming Trips</Text>
                <View style={styles.item}>
                    <FontAwesome5 name="mountain" size={18} color="#0077FF" style={styles.icon} />
                    <Text style={styles.cardItem}>Shimla (2025)</Text>
                </View>
                <View style={styles.item}>
                    <FontAwesome5 name="umbrella-beach" size={18} color="#0077FF" style={styles.icon} />
                    <Text style={styles.cardItem}>Maldives (2025)</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>About Me</Text>
                <View style={styles.item}>
                    <MaterialIcons name="person" size={18} color="#0077FF" style={styles.icon} />
                    <Text style={styles.cardItem}>
                        Passionate traveler exploring new destinations, cultures, and cuisines.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f0f4f7",
        alignItems: "center",
        marginTop:30
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: "#0077FF",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0D1F3C",
    },
    subtext: {
        fontSize: 16,
        color: "gray",
        marginBottom: 25,
    },
    card: {
        width: width - 40,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
        color: "#0077FF",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    cardItem: {
        fontSize: 16,
        color: "#333",
        flexShrink: 1,
    },
});
