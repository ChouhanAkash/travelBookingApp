import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const categories = [
    { id: "1", title: "Flights", icon: <Ionicons name="airplane-outline" size={24} color="#4A90E2" /> },
    { id: "2", title: "Hotels", icon: <FontAwesome5 name="hotel" size={24} color="#FF6347" /> },
    { id: "3", title: "Cabs", icon: <MaterialCommunityIcons name="taxi" size={24} color="#FFD700" /> },
];

const featuredTrips = [
    { id: "1", place: "Paris", image: "https://picsum.photos/400/300?random=1" },
    { id: "2", place: "Bali", image: "https://picsum.photos/400/300?random=2" },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Where do you want to go?</Text>
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#888" />
                <TextInput placeholder="Search Destination..." style={styles.searchBox} />
            </View>
            <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.category}>
                        <View style={styles.iconContainer}>{item.icon}</View>
                        <Text style={styles.catText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                style={{ marginVertical: 20 }}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.subtitle}>Featured Trips</Text>
            <FlatList
                data={featuredTrips}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardImageWrapper}>
                            <Image source={{ uri: item.image }} style={styles.cardImg} />
                        </View>
                        <View style={styles.cardTextWrapper}>
                            <Text style={styles.cardText}> {item.place}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f2f2f2", padding: 20 },
    title: { fontSize: 22, fontWeight: "700", color: "#333",marginTop:20 },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginTop: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    searchBox: { flex: 1, marginLeft: 8, fontSize: 16 },
    category: {
        backgroundColor: "#fff",
        marginRight: 15,
        paddingVertical: 15,
        paddingHorizontal: 22,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 5,
    },
    iconContainer: {
        backgroundColor: "#f0f0f0",
        padding: 12,
        borderRadius: 50,
        marginBottom: 8,
    },
    
    catText: { fontWeight: "600", fontSize: 14, color: "#333" },
    subtitle: { fontSize: 20, fontWeight: "700", marginBottom: 15, color: "#333" },
    card: {
        width: width * 0.55,
        marginRight: 15,
        borderRadius: 18,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
        overflow: "hidden",
    },
    cardImageWrapper: { width: "100%", height: 140 },
    cardImg: { width: "100%", height: "100%", borderTopLeftRadius: 18, borderTopRightRadius: 18 },
    cardTextWrapper: { padding: 12, backgroundColor: "#fff" },
    cardText: { fontWeight: "700", fontSize: 16, color: "#333" },
});
