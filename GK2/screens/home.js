import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Roomies!</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CreateListing')} 
        >
        <Text style={styles.buttonText}>Create Listing</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Listings')} 
        style={styles.button}
      >
      <Text style={styles.buttonText}>View Listings</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFF", // White background
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A56A2", // Primary color for headings
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A56A2", // Primary color for button
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF", // White text for button
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default Home;