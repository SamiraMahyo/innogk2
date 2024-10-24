import React from "react";
import { getApps, initializeApp } from "firebase/app";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CreateListing from './screens/createlisting';
import Listings from './screens/listings';
import Home from './screens/home';
import Details from './screens/listingdetails';
import Edit from './screens/editlisting';

const firebaseConfig = {
  apiKey: "AIzaSyDN7EIvECatgVGEmQkk9wVOMDtb02XxcdY",
  authDomain: "firstproject-7e845.firebaseapp.com",
  databaseURL: "https://firstproject-7e845-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstproject-7e845",
  storageBucket: "firstproject-7e845.appspot.com",
  messagingSenderId: "343163387307",
  appId: "1:343163387307:web:ec131f33b9b225f060e6ee",
  measurementId: "G-3799XVZRZ4"
};

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
  console.log("Firebase Initialized!");
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateListing" component={CreateListing} />
        <Stack.Screen name="Listings" component={Listings} />
        <Stack.Screen name="ListingDetails" component={Details} />
        <Stack.Screen name="EditListing" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
