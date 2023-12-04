// Cuisine.js

import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Cuisine = ({ onClose }) => {
  const [selectedCuisine, setSelectedCuisine] = React.useState(null);
  const [isCuisineVisible, setIsCuisineVisible] = React.useState(true);

  const handlePress = (cuisine) => {
    setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine);
    onClose(); // Close the Cuisine modal
    // Filter nearby restaurants based on the selected cuisine
    // You need to pass the necessary parameters to this function based on your context
    // fetchNearbyRestaurants(userLocation, radius, selectedBudget, customBudget, cuisine);
  };

  const getButtonStyles = (cuisine) => ({
    backgroundColor: selectedCuisine === cuisine ? "#FF4317" : "transparent",
    borderColor: selectedCuisine === cuisine ? "transparent" : "#FF4317",
  });

  const getTextStyles = (cuisine) => ({
    color: selectedCuisine === cuisine ? "#FFF" : "#FF4317",
  });

  const handleToggleCuisineVisibility = () => {
    setIsCuisineVisible(!isCuisineVisible);
  };

  const cuisines = ["Filipino", "Chinese", "Spanish", "French", "American", "Japanese"];

  return (
    <View style={styles.cuisine}>
      {isCuisineVisible && (
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild}>
            <Text style={styles.cuisineType}>Cuisine Type</Text>
            <View style={styles.columnContainer}>
              {cuisines.map((cuisine, index) => (
                <Pressable
                  key={cuisine}
                  style={[
                    styles.button,
                    styles.buttonLayout,
                    getButtonStyles(cuisine),
                  ]}
                  onPress={() => handlePress(cuisine)}
                >
                  <View style={styles.buttonInner}>
                    <Text style={[styles.cuisineText, getTextStyles(cuisine)]}>
                      {cuisine}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
            <Pressable
              style={styles.cancelButton}
              onPress={() => {
                onClose(); // Close the Cuisine modal
              }}
            >
              <Image
                style={styles.cancel1Icon}
                resizeMode="cover"
                source={require("../assets/cancel-1.png")}
              />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cuisine: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayout: {
    height: 40,
    width: "48%",
    marginVertical: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    marginVertical: 5,
  },
  buttonInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cuisineType: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    textAlign: "left",
  },
  cuisineText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    width: "95%",
    height: "auto",
    position: "absolute",
    top: 102, // Adjusted top value
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
  },
  columnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cancelButton: {
    position: "absolute",
    top: 4,
    right: 15,
    padding: 10,
  },
  cancel1Icon: {
    width: 24,
    height: 24,
  },
});

export default Cuisine;
