import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function BookingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book Your Trip</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Destination</Text>
        <TextInput placeholder="Enter Destination" style={styles.input} />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          placeholder="DD/MM/YYYY"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Number of People</Text>
        <TextInput
          placeholder="Enter Number of People"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f0f4f7",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#0D1F3C",
  },
  card: {
    width: width - 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: "#7b8a99",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f7f9fc",
    color: "#0D1F3C",
  },
  btn: {
    width: width - 40,
    backgroundColor: "#0077FF",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#0077FF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
